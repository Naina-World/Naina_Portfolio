import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';
import { ApiError } from '../utils/apiError.js';

export function requireAdmin(req, _res, next) {
  const authorization = req.headers.authorization;

  if (!authorization?.startsWith('Bearer ')) {
    return next(new ApiError(401, 'Authentication required'));
  }

  try {
    const token = authorization.slice(7).trim();
    const payload = jwt.verify(token, env.JWT_SECRET);

    if (payload.role !== 'admin' || !payload.sub) {
      throw new Error('Invalid admin token');
    }

    req.admin = payload;
    return next();
  } catch {
    return next(new ApiError(401, 'Invalid or expired token'));
  }
}
