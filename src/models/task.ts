// src/models/task.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface ITask extends Document {
  title: string;
  description: string;
  creationDate: Date;
  dueDate: Date;
  assignedTo: string;
  category: string;
  status: 'Pending' | 'Completed';
}

const TaskSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  creationDate: { type: Date, default: Date.now },
  dueDate: { type: Date, required: true },
  assignedTo: { type: String, required: true },
  category: { type: String, required: true },
  status: { type: String, enum: ['Pending', 'Completed'], default: 'Pending' }
});

export default mongoose.model<ITask>('Task', TaskSchema);
