import { CreateOrder } from '../../../entities/orders/Gateway';
import { BaseLogger } from '../../../../logger/Logger';
import { Orders } from 'application/entities/orders/Orders';
import { validateAndParseCreateOrders } from '../../../entities/orders/Parser';
import { CreateAnOrderError } from './Errors';

export type CreateAnOrderDependencies = {
  logger: BaseLogger;
  createOrder: CreateOrder;
};

export const createOrder =
  ({ logger, createOrder }: CreateAnOrderDependencies) =>
  async (params: any): Promise<Orders> => {

    const validatedParams = validateAndParseCreateOrders({
        customer_id: params.customerId,
        items: params.items
    });

    console.log('----------------------------------------------------------------')
    console.log(validatedParams.items)
    console.log('----------------------------------------------------------------')

    try {
      return await createOrder({
        customer_id: validatedParams.customer_id,
        items: validatedParams.items
      });
    } catch (error) {
      console.log(error);
      logger.error('Error. Details: ', error);
      throw new CreateAnOrderError(error);
    }
  };
