import { z } from 'zod';

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(8).max(100)
});

export const bootstrapSchema = z.object({
  email: z.email(),
  password: z.string().min(12).max(100)
});

export const contactStatusSchema = z.object({
  status: z.enum(['new', 'read', 'replied', 'archived'])
});
