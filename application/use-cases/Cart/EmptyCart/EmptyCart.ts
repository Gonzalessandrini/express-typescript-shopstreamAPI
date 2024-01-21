import { BaseLogger } from 'logger/Logger';
import { EmptyCartError } from './Errors';
import { EmptyCart } from 'application/entities/cart/Gateway';
import { Cart } from 'application/entities/cart/Cart';

export type GetProductsInCartDependencies = {
  logger: BaseLogger;
  emptyCart: EmptyCart;
};

export const emptyCart =
  ({ logger, emptyCart }: GetProductsInCartDependencies) =>
  async ({ cart_id }: { cart_id: string }): Promise<Cart> => {
    try {
      return await emptyCart(cart_id as string);
    } catch (error) {
      logger.error('Error. Details: ', error);
      throw new EmptyCartError(error);
    }
  };