import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxlength: 150 },
  slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
  description: { type: String, required: true, trim: true, maxlength: 5000 },
  category: { type: String, enum: ['full-stack', 'frontend', 'backend', 'mini-project'], default: 'full-stack' },
  imageUrl: String,
  liveUrl: String,
  githubUrl: String,
  technologies: { type: [String], default: [] },
  featured: { type: Boolean, default: false },
  year: { type: Number, min: 2000, max: 2100 },
  sortOrder: { type: Number, default: 0 },
  published: { type: Boolean, default: true }
}, { timestamps: true, versionKey: false });

projectSchema.index({ featured: -1, sortOrder: 1, createdAt: -1 });
projectSchema.index({ category: 1, published: 1 });

export const Project = mongoose.model('Project', projectSchema);
