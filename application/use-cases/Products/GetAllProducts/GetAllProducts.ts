import { BaseLogger } from 'logger/Logger';
import { GetAllProducts } from '../../../../application/entities/products/Gateway';
import { GetAllProductsError } from './Errors';

export type GetProductsDependencies = {
  logger: BaseLogger;
  getAllProducts: GetAllProducts;
};

export const getAllProducts =
  ({ logger, getAllProducts }: GetProductsDependencies) =>
  async (): Promise<any> => {
    try {
      return await getAllProducts();
    } catch (error) {
      logger.error('Error. Details: ', error);
      throw new GetAllProductsError(error);
    }
  };