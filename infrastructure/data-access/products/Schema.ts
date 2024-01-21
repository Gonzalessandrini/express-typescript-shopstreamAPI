import { Schema, model } from 'mongoose';
import { Products } from '../../../application/entities/products/Products';

// Document interface
export interface ProductModel extends Document, Products {
  _id: string;
}

// Schema
const schema = new Schema<ProductModel>(
  {
    name: String,
    description: String,
    price: Number,
    discounted_price: String,
    thumbnail: String,
    categoryId: String
  },
  { timestamps: {} }
);

export const ProductModel = model<ProductModel>('Products', schema);
