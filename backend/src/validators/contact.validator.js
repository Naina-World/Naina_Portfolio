import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.email(),
  subject: z.string().trim().max(150).optional(),
  message: z.string().trim().min(10).max(5000),
  service: z.string().trim().max(100).optional(),
  budget: z.string().trim().max(100).optional()
});
