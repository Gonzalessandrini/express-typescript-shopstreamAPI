import { BaseLogger } from 'logger/Logger';
import { GetSingleOrder } from '../../../../application/entities/orders/Gateway';
import { GetAnOrderError } from './Errors';
import { Orders } from '../../../../application/entities/orders/Orders';

export type GetAnOrderDependencies = {
  logger: BaseLogger;
  getSingleOrder: GetSingleOrder;
};

export const getSingleOrder =
  ({ logger, getSingleOrder }: GetAnOrderDependencies) =>
  async ({ order_id }: { order_id: string }): Promise<Orders> => {
    try {
      return await getSingleOrder(order_id as string);
    } catch (error) {
      logger.error('Error. Details: ', error);
      throw new GetAnOrderError(error);
    }
  };