import { redis, USERS_INDEX_KEY } from '../_lib/redis';

export const config = { runtime: 'edge' };

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== 'GET') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const keys = await redis.smembers(USERS_INDEX_KEY);

    const users = keys.length
      ? (await redis.mget(...keys))
          .map((value, index) => {
            if (!value) return null;
            const key = keys[index];
            const userId = key.replace(/^user:/, '').replace(/:progress$/, '');
            return { userId, ...(value as Record<string, unknown>) };
          })
          .filter((u): u is Record<string, unknown> => u !== null)
      : [];

    users.sort((a, b) => {
      const dateA = new Date((a.lastUpdated as string) || 0).getTime();
      const dateB = new Date((b.lastUpdated as string) || 0).getTime();
      return dateB - dateA;
    });

    return new Response(
      JSON.stringify({ success: true, count: users.length, users }),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    );
  } catch (error) {
    console.error('Error fetching users:', error);
    return new Response(
      JSON.stringify({
        error: 'Failed to fetch users',
        message: error instanceof Error ? error.message : 'Unknown error',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }
}
