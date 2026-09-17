import mongoose, { Schema, Document } from 'mongoose';

export interface IProject extends Document {
  title: string;
  category: string;
  description: string;
  beforeImageUrl?: string;
  afterImageUrl: string;
  location?: string;
  completionYear?: number;
  createdAt: Date;
}

const ProjectSchema = new Schema<IProject>({
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true },
  beforeImageUrl: { type: String },
  afterImageUrl: { type: String, required: true },
  location: { type: String },
  completionYear: { type: Number },
}, { timestamps: true });

export interface IInquiry extends Document {
  customerName: string;
  customerPhone: string;
  projectType: string;
  area?: string;
  description?: string;
  attachmentUrls?: string[];
  status: string;
  createdAt: Date;
}

const InquirySchema = new Schema<IInquiry>({
  customerName: { type: String, required: true },
  customerPhone: { type: String, required: true },
  projectType: { type: String, required: true },
  area: { type: String },
  description: { type: String },
  attachmentUrls: [{ type: String }],
  status: { type: String, default: 'pending' },
}, { timestamps: true });

export interface IService extends Document {
  title: string;
  slug: string;
  description: string;
  icon?: string;
  features: string[];
}

const ServiceSchema = new Schema<IService>({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  icon: { type: String },
  features: [{ type: String }],
});

export const Project = mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);
export const Inquiry = mongoose.models.Inquiry || mongoose.model<IInquiry>('Inquiry', InquirySchema);
export const Service = mongoose.models.Service || mongoose.model<IService>('Service', ServiceSchema);
