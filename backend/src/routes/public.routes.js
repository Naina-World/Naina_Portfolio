import { Router } from 'express';
import { getPortfolio, listProjects, getProject } from '../controllers/public.controller.js';

const router = Router();

router.get('/portfolio', getPortfolio);
router.get('/projects', listProjects);
router.get('/projects/:slug', getProject);

export default router;
