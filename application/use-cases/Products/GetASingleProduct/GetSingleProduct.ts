import { BaseLogger } from 'logger/Logger';
import { GetSingleProduct } from '../../../../application/entities/products/Gateway';
import { GetSingleProductError } from './Errors';
import { Products } from '../../../../application/entities/products/Products';

export type GetSingleProductDependencies = {
  logger: BaseLogger;
  getSingleProduct: GetSingleProduct;
};

export const getSingleProduct =
  ({ logger, getSingleProduct }: GetSingleProductDependencies) =>
  async ({ id }: { id: string }): Promise<Products> => {
    try {
      return await getSingleProduct(id as string);
    } catch (error) {
      logger.error('Error. Details: ', error);
      throw new GetSingleProductError(error);
    }
  };