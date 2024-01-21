import { RemoveItemFromCart } from '../../../../application/entities/cart/Gateway';
import { BaseLogger } from '../../../../logger/Logger';
import { removeItemFromCartError } from './Errors';
import { Cart } from '../../../../application/entities/cart/Cart';

export type removeItemFromCartDependencies = {
  logger: BaseLogger;
  removeItemFromCart: RemoveItemFromCart;
};

export const removeItemFromCart =
  ({ logger, removeItemFromCart }: removeItemFromCartDependencies) =>
  async ({ item_id }: { item_id: string }): Promise<Cart> => {
console.log('params: ' + item_id)
    try {
      return await removeItemFromCart(item_id);
    } catch (error) {
      console.log(error);
      logger.error('Error. Details: ', error);
      throw new removeItemFromCartError(error);
    }
  };
