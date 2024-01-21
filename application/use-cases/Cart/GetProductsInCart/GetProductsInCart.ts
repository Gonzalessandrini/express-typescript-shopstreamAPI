import { BaseLogger } from 'logger/Logger';
import { GetProductsInCartError } from './Errors';
import { GetProductsInCart } from 'application/entities/cart/Gateway';
import { Cart, CartItem } from 'application/entities/cart/Cart';

export type GetProductsInCartDependencies = {
  logger: BaseLogger;
  getProductsInCart: GetProductsInCart;
};

export const getProductsInCart =
  ({ logger, getProductsInCart }: GetProductsInCartDependencies) =>
  async ({ cart_id }: { cart_id: string }): Promise<Cart> => {
    try {
      return await getProductsInCart(cart_id as string);
    } catch (error) {
      logger.error('Error. Details: ', error);
      throw new GetProductsInCartError(error);
    }
  };