import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  passwordHash: { type: String, required: true, select: false },
  role: { type: String, enum: ['admin'], default: 'admin' },
  lastLoginAt: Date
}, { timestamps: true, versionKey: false });

export const Admin = mongoose.model('Admin', adminSchema);
