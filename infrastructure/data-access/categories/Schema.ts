import { Schema, model } from 'mongoose';
import { Category } from '../../../application/entities/categories/Categories';

// Document interface
export interface CategoryModel extends Document, Category {
  _id: string;
}

// Schema
const schema = new Schema<CategoryModel>(
  {
    name: String,
    description: String,
    departmentId: String
  },
  { timestamps: {} }
);

export const CategoryModel = model<CategoryModel>('Category', schema);
