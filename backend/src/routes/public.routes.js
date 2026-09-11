import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { env } from '../config/env.js';
import { getPortfolio, listProjects, getProject, createContact } from '../controllers/public.controller.js';
import { validate } from '../middlewares/validate.js';
import { contactSchema } from '../validators/contact.validator.js';

const router = Router();

const contactLimiter = rateLimit({
  windowMs: env.RATE_LIMIT_WINDOW_MS,
  limit: env.CONTACT_RATE_LIMIT_MAX,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  message: { success: false, message: 'Too many contact requests. Please try again later.' }
});

router.get('/portfolio', getPortfolio);
router.get('/projects', listProjects);
router.get('/projects/:slug', getProject);
router.post('/contact', contactLimiter, validate(contactSchema), createContact);

export default router;
