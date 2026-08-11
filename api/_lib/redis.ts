import { Redis } from '@upstash/redis';

const url =
  process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
const token =
  process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;

if (!url || !token) {
  throw new Error(
    'Redis is not configured. Add the Upstash/Redis integration to this Vercel project.',
  );
}

export const redis = new Redis({ url, token });

export const USERS_INDEX_KEY = 'users:index';

export function progressKey(email: string): string {
  const userId = email.toLowerCase().trim().replace(/[^a-z0-9@._-]/g, '-');
  return `user:${userId}:progress`;
}
