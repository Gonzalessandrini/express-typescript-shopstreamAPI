import { OrderModel, OrdersModel } from "./Schema";
import { CreateOrderParamsRepository } from "./Types";

export const CreateOrderRepository = async (Order: CreateOrderParamsRepository): Promise<OrderModel> => {
    return await OrdersModel.create(Order);
  };
  
export const GetSingleOrderRepository = async (_id: string): Promise<OrderModel | null> => {
  return await OrdersModel.findOne({ _id }).populate('items.product_id')
};