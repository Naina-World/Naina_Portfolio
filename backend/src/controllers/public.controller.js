
import { env } from '../config/env.js';

import { Profile } from '../models/Profile.js';
import { Project } from '../models/Project.js';
import { Skill } from '../models/Skill.js';

import { ApiError } from '../utils/apiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { getPagination } from '../utils/pagination.js';

export const getPortfolio = asyncHandler(async (_req, res) => {
  const [profile, projects, skills] = await Promise.all([
    Profile.findOne().lean(),

    Project.find({ published: true })
      .sort({ featured: -1, sortOrder: 1, createdAt: -1 })
      .lean(),

    Skill.find({ visible: true })
      .sort({ category: 1, sortOrder: 1 })
      .lean()
  ]);

  return res.json({
    success: true,
    data: {
      profile,
      projects,
      skills
    }
  });
});

export const listProjects = asyncHandler(async (req, res) => {
  const { page, limit, skip } = getPagination(req.query);

  const filter = { published: true };

  if (req.query.category) {
    filter.category = req.query.category;
  }

  if (req.query.featured === 'true') {
    filter.featured = true;
  }

  const [items, total] = await Promise.all([
    Project.find(filter)
      .sort({ featured: -1, sortOrder: 1, createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean(),

    Project.countDocuments(filter)
  ]);

  return res.json({
    success: true,
    data: items,
    meta: {
      page,
      limit,
      total,
      pages: Math.ceil(total / limit)
    }
  });
});

export const getProject = asyncHandler(async (req, res) => {
  const project = await Project.findOne({
    slug: req.params.slug,
    published: true
  }).lean();

  if (!project) {
    throw new ApiError(404, 'Project not found');
  }

  return res.json({
    success: true,
    data: project
  });
});

