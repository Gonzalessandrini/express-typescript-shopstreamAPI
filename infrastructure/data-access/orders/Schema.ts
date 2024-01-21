import { Orders } from 'application/entities/orders/Orders';
import { Schema, model, Document } from 'mongoose';

// Interfaz para el documento Order, extendiendo de mongoose.Document
export interface OrderModel extends Document, Orders {
    _id: string;
}

// Esquema de Mongoose para la orden
const schema = new Schema(
  {
    customer_id: { type: Schema.Types.ObjectId, ref:'Customer', required: true },
    items: [
      {
        product_id: { type: Schema.Types.ObjectId, ref: 'Products', required: true },
        quantity: { type: Number, required: true },
        _id: false
      }
    ],
    status: {
      type: String,
      default: 'pending'
    },
    // ... otros campos como fecha de creación, total, etc.
  },
  { timestamps: true } // Añadir marcas de tiempo para createdAt y updatedAt
);

export const OrdersModel = model<OrderModel>('Order', schema);
