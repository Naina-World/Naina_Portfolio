import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 100 },
  email: { type: String, required: true, lowercase: true, trim: true },
  subject: { type: String, trim: true, maxlength: 150 },
  message: { type: String, required: true, trim: true, maxlength: 5000 },
  service: { type: String, trim: true, maxlength: 100 },
  budget: { type: String, trim: true, maxlength: 100 },
  status: { type: String, enum: ['new', 'read', 'replied', 'archived'], default: 'new' },
  source: { type: String, default: 'portfolio' },
  ipHash: { type: String, select: false }
}, { timestamps: true, versionKey: false });

contactSchema.index({ createdAt: -1 });
contactSchema.index({ status: 1, createdAt: -1 });

export const Contact = mongoose.model('Contact', contactSchema);
