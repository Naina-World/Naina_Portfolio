import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';
import { Admin } from '../models/Admin.js';
import { Profile } from '../models/Profile.js';
import { Project } from '../models/Project.js';
import { Skill } from '../models/Skill.js';

import { ApiError } from '../utils/apiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const login = asyncHandler(async (req, res) => {
  const admin = await Admin.findOne({ email: req.body.email }).select('+passwordHash');

  if (!admin || !(await bcrypt.compare(req.body.password, admin.passwordHash))) {
    throw new ApiError(401, 'Invalid email or password');
  }

  admin.lastLoginAt = new Date();
  await admin.save();

  const token = jwt.sign(
    { sub: admin._id.toString(), role: admin.role },
    env.JWT_SECRET,
    { expiresIn: env.JWT_EXPIRES_IN }
  );

  return res.json({ success: true, data: { token } });
});

export const createAdmin = asyncHandler(async (req, res) => {
  if (env.NODE_ENV === 'production') {
    throw new ApiError(403, 'Admin bootstrap is disabled in production');
  }

  const existingAdmin = await Admin.exists({ email: req.body.email });
  if (existingAdmin) throw new ApiError(409, 'Admin already exists');

  const passwordHash = await bcrypt.hash(req.body.password, 12);
  const admin = await Admin.create({ email: req.body.email, passwordHash });

  return res.status(201).json({
    success: true,
    data: { id: admin._id, email: admin.email }
  });
});

export const upsertProfile = asyncHandler(async (req, res) => {
  const profile = await Profile.findOneAndUpdate(
    {},
    req.body,
    { upsert: true, new: true, setDefaultsOnInsert: true, runValidators: true }
  );

  return res.json({ success: true, data: profile });
});

export const createProject = asyncHandler(async (req, res) => {
  const project = await Project.create(req.body);
  return res.status(201).json({ success: true, data: project });
});

export const updateProject = asyncHandler(async (req, res) => {
  const project = await Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );

  if (!project) throw new ApiError(404, 'Project not found');
  return res.json({ success: true, data: project });
});

export const deleteProject = asyncHandler(async (req, res) => {
  const project = await Project.findByIdAndDelete(req.params.id);
  if (!project) throw new ApiError(404, 'Project not found');
  return res.status(204).send();
});

export const createSkill = asyncHandler(async (req, res) => {
  const skill = await Skill.create(req.body);
  return res.status(201).json({ success: true, data: skill });
});

export const deleteSkill = asyncHandler(async (req, res) => {
  const skill = await Skill.findByIdAndDelete(req.params.id);
  if (!skill) throw new ApiError(404, 'Skill not found');
  return res.status(204).send();
});



