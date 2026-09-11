import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { env } from '../config/env.js';
import {
  login,
  createAdmin,
  upsertProfile,
  createProject,
  updateProject,
  deleteProject,
  createSkill,
  deleteSkill,
  listContacts,
  updateContactStatus
} from '../controllers/admin.controller.js';
import { requireAdmin } from '../middlewares/auth.js';
import { validate } from '../middlewares/validate.js';
import { loginSchema, bootstrapSchema, contactStatusSchema } from '../validators/auth.validator.js';

const router = Router();

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: env.LOGIN_RATE_LIMIT_MAX,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  message: { success: false, message: 'Too many login attempts. Please try again later.' }
});

router.post('/auth/login', loginLimiter, validate(loginSchema), login);
router.post('/auth/bootstrap', validate(bootstrapSchema), createAdmin);

router.use(requireAdmin);

router.put('/profile', upsertProfile);

router.post('/projects', createProject);
router.patch('/projects/:id', updateProject);
router.delete('/projects/:id', deleteProject);

router.post('/skills', createSkill);
router.delete('/skills/:id', deleteSkill);


router.get('/contacts', listContacts);
router.patch('/contacts/:id/status', validate(contactStatusSchema), updateContactStatus);

export default router;
