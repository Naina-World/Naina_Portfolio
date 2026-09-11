import cors from 'cors';
import { env } from './env.js';

const allowedOrigins = env.CLIENT_URL
  .split(',')
  .map((url) => url.trim())
  .filter(Boolean);

for (const origin of allowedOrigins) {
  try {
    new URL(origin);
  } catch {
    throw new Error(`Invalid CLIENT_URL origin: ${origin}`);
  }
}

export const corsMiddleware = cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error('CORS origin not allowed'));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
});
