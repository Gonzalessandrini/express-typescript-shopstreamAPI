import { UpdateItemQuantity } from '../../../../application/entities/cart/Gateway';
import { BaseLogger } from '../../../../logger/Logger';
import { UpdateItemQuantityError } from './Errors';
import { Cart } from '../../../../application/entities/cart/Cart';
import { validateAndParseUpdateItemQuantity } from '../../../../application/entities/cart/Parser';

export type updateItemQuantityDependencies = {
  logger: BaseLogger;
  updateItemQuantity: UpdateItemQuantity;
};

export const updateItemQuantity =
  ({ logger, updateItemQuantity }: updateItemQuantityDependencies) =>
  async (params: any): Promise<Cart> => {

    const validatedParams = validateAndParseUpdateItemQuantity({
        item_id: params.item_id,
        quantity: params.quantity
    });

    try {
      return await updateItemQuantity({
        item_id: validatedParams.item_id,
        quantity: validatedParams.quantity
      });
    } catch (error) {
      console.log(error);
      logger.error('Error. Details: ', error);
      throw new UpdateItemQuantityError(error);
    }
  };
