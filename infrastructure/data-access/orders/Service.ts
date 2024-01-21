
import { Orders } from 'application/entities/orders/Orders';
import { CreateOrder, GetSingleOrder } from '../../../application/entities/orders/Gateway';
import { BaseLogger } from '../../../logger/Logger';
import { CreateAnOrderError, GetSingleOrderError } from './Errors';
import { parseCreateOrderParams, parseGetOrder } from './Parser';
import { CreateOrderRepository, GetSingleOrderRepository } from './Repository';

export type OrderDependencies = {
  logger: BaseLogger;
};

export const createOrder: (dependencies: OrderDependencies) => CreateOrder =
  (dependencies) =>
  async (params): Promise<any> => {
    try {
      const paramsParsed = parseCreateOrderParams({
        ...params
      });

      const OrderSaved = await CreateOrderRepository({
        ...paramsParsed
      });

    console.log(OrderSaved)

    return {order_id: OrderSaved._id};
    } catch (error) {
      dependencies.logger.error('Error. Details:', error);
      throw new CreateAnOrderError(error);
    }
  };

  export const getSingleOrder: (dependencies: OrderDependencies) => GetSingleOrder =
  (dependencies) =>
  async (productId): Promise<any> => {
    try {
      const localOrder = await GetSingleOrderRepository(productId);
      if (!localOrder) throw 'order not found';

      const response = {
        order_id: localOrder._id,
        order_items: localOrder.items.map(item => ({
          product_id: item.product_id._id,
          product_name: item.product_id.name,
          thumbnail: item.product_id.thumbnail,
          unit_cost: item.product_id.price,
          quantity: item.quantity,
          sub_total: Number(item.product_id.price) * item.quantity
        })),
      };
      
      return response;
    } catch (error) {
      dependencies.logger.error('Error. Details:', error);
      throw new GetSingleOrderError(error);
    }
  };
