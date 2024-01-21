import { BaseLogger } from 'logger/Logger';
import { GetProductCategoryResponse } from '../../../../application/entities/categories/Categories';
import { GetProductCategory } from '../../../../application/entities/categories/Gateway';
import { GetProductCategoryError } from './Errors';

export type GetProductCategoryDependencies = {
  logger: BaseLogger;
  getProductCategory: GetProductCategory;
};

export const getProductCategory =
  ({ logger, getProductCategory }: GetProductCategoryDependencies) =>
  async ({ productId }: { productId: string }): Promise<GetProductCategoryResponse> => {
    console.log(productId)
    try {
      return await getProductCategory(productId as string);
    } catch (error) {
      logger.error('Error. Details: ', error);
      throw new GetProductCategoryError(error);
    }
  };