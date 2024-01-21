import { Schema, model } from 'mongoose';
import { Department } from '../../../application/entities/department/Department';

// Document interface
export interface DepartmentModel extends Document, Department {
  _id: string;
}

// Schema
const schema = new Schema<DepartmentModel>(
  {
    name: String,
    description: String
  },
  { timestamps: {} }
);

export const DepartmentModel = model<DepartmentModel>('Department', schema);
