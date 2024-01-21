import { Schema, model, Document } from 'mongoose';
import { Customer } from '../../../application/entities/customer/Customer';

// Document interface
export interface CustomerModel extends Document, Customer {
  _id: string;
}

// Schema
const schema = new Schema<CustomerModel>(
  {
    name: String,
    email: String,
    password: String,
    address_1: { type: String, default: null },
    address_2: { type: String, default: null },
    city: { type: String, default: null },
    region: { type: String, default: null },
    postal_code: { type: String, default: null },
    shipping_region_id: Number,
    credit_card: { type: String, default: null },
    day_phone: { type: String, default: null },
    eve_phone: { type: String, default: null },
    mob_phone: { type: String, default: null },
  },
  { timestamps: true } 
);

export const CustomerModel = model<CustomerModel>('Customer', schema);
