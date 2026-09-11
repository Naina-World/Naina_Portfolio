import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 80 },
  category: { type: String, enum: ['frontend', 'backend', 'database', 'language', 'tools', 'other'], required: true },
  level: { type: String, enum: ['beginner', 'intermediate', 'advanced'], default: 'intermediate' },
  icon: String,
  sortOrder: { type: Number, default: 0 },
  visible: { type: Boolean, default: true }
}, { timestamps: true, versionKey: false });

skillSchema.index({ category: 1, sortOrder: 1 });

export const Skill = mongoose.model('Skill', skillSchema);
