import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  headline: { type: String, required: true, trim: true },
  bio: { type: String, required: true, trim: true },
  location: { type: String, trim: true },
  availability: { type: String, trim: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  phone: { type: String, trim: true },
  avatarUrl: { type: String, trim: true },
  resumeUrl: { type: String, trim: true },
  socialLinks: {
    github: String,
    linkedin: String,
    email: String
  },
  stats: {
    projects: { type: Number, default: 0 },
    experienceMonths: { type: Number, default: 0 },
    clients: { type: Number, default: 0 }
  }
}, { timestamps: true, versionKey: false });

export const Profile = mongoose.model('Profile', profileSchema);
