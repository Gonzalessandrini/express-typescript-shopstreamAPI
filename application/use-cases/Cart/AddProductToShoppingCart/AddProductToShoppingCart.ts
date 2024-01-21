import { AddProductToCart} from '../../../../application/entities/cart/Gateway';
import { BaseLogger } from '../../../../logger/Logger';
import { AddProductToCartError } from './Errors';
import { AddProductToCartResponse } from '../../../../application/entities/cart/Cart';
import { validateAndParseAddProductToCart } from '../../../../application/entities/cart/Parser';

export type AddProductToShoppingCartDependencies = {
  logger: BaseLogger;
  addProductToShoppingCart: AddProductToCart;
};

export const addProductToShoppingCart =
  ({ logger, addProductToShoppingCart }: AddProductToShoppingCartDependencies) =>
  async (params: any): Promise<AddProductToCartResponse> => {
    const validatedParams = validateAndParseAddProductToCart({
        cartId : params.cartId,
        productId : params.productId,
        quantity : params.quantity
    });

    try {
      return await addProductToShoppingCart({
        cart_id: validatedParams.cartId,
        product_id: validatedParams.productId,
        quantity: validatedParams.quantity
      });
    } catch (error) {
      console.log(error);
      logger.error('Error. Details: ', error);
      throw new AddProductToCartError(error);
    }
  };
