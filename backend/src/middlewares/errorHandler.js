import mongoose from 'mongoose';
import { env } from '../config/env.js';

export function errorHandler(error, req, res, _next) {
  let statusCode = error.statusCode || 500;
  let message = error.message || 'Internal server error';
  let details = error.details;

  if (error instanceof mongoose.Error.ValidationError) {
    statusCode = 400;
    message = 'Database validation failed';
    details = Object.values(error.errors).map((item) => item.message);
  }

  if (error?.code === 11000) {
    statusCode = 409;
    message = 'A resource with the same unique value already exists';
    details = error.keyValue;
  }

  if (error?.name === 'CastError') {
    statusCode = 400;
    message = 'Invalid resource identifier';
  }

  if (error?.message === 'CORS origin not allowed') {
    statusCode = 403;
    message = 'Origin is not allowed';
  }

  const response = { success: false, message };
  if (details) response.details = details;
  if (env.NODE_ENV !== 'production') response.stack = error.stack;

  console.error(`[${req.method}] ${req.originalUrl}`, error);
  return res.status(statusCode).json(response);
}
