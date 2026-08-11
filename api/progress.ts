import { redis, progressKey, USERS_INDEX_KEY } from './_lib/redis';

export const config = { runtime: 'edge' };

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await request.json();
    const { userName, userEmail, userTeam, generalProgress, teamProgress } = body;

    if (!userEmail) {
      return new Response(JSON.stringify({ error: 'userEmail is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const key = progressKey(userEmail);
    const progressData = {
      userName,
      userEmail,
      userTeam: userTeam || null,
      generalProgress: generalProgress || {},
      teamProgress: teamProgress || {},
      lastUpdated: new Date().toISOString(),
    };

    await redis.set(key, progressData);
    await redis.sadd(USERS_INDEX_KEY, key);

    return new Response(
      JSON.stringify({ success: true, message: 'Progress saved successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    );
  } catch (error) {
    console.error('Error saving progress:', error);
    return new Response(
      JSON.stringify({
        error: 'Failed to save progress',
        message: error instanceof Error ? error.message : 'Unknown error',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }
}
