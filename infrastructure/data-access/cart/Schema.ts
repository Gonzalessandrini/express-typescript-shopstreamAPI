import { Schema, model } from 'mongoose';
import { Cart, CartItem } from '../../../application/entities/cart/Cart';

// Document interface
export interface ShoppingCartModel extends Document, Cart {
  _id: string;
}

const cartItemSchema = new Schema(
  {
    item_id: { type: String, required: true },
    product_id: { type: Schema.Types.ObjectId, ref: 'Products', required: true },
    quantity: { type: Number, required: true },
  },
  { _id: false } // _id: false indica a Mongoose que no genere un _id para los elementos de la matriz
);

const schema = new Schema<ShoppingCartModel>(
  {
    cart_id: { type: String, required: true },
    items: [cartItemSchema]
  },
  { timestamps: true }
);

export const ShoppingCartModel = model<ShoppingCartModel>('ShoppingCart', schema);
