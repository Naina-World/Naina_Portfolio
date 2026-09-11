import cors from "cors";
import { env } from "./env.js";

const allowedOrigins = [
  "https://naina-portfolio-one.vercel.app",
  ...env.CLIENT_URL
    .split(",")
    .map((url) => url.trim())
    .filter(Boolean),
];

export const corsMiddleware = cors({
  origin(origin, callback) {
    // Allow requests without an Origin header
    // (Postman, curl, server-to-server requests, etc.)
    if (!origin) {
      return callback(null, true);
    }

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    // Allow Vercel preview deployments
    if (
      origin.endsWith(".vercel.app") &&
      origin.startsWith("https://naina-portfolio")
    ) {
      return callback(null, true);
    }

    return callback(new Error(`CORS origin not allowed: ${origin}`));
  },

  credentials: true,

  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],

  allowedHeaders: ["Content-Type", "Authorization"],
});
