import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { env } from '../config/env.js';
import { getPortfolio, listProjects, getProject, createContact } from '../controllers/public.controller.js';
import { validate } from '../middlewares/validate.js';
import { contactSchema } from '../validators/contact.validator.js';

const router = Router();


router.get('/portfolio', getPortfolio);
router.get('/projects', listProjects);
router.get('/projects/:slug', getProject);


export default router;
