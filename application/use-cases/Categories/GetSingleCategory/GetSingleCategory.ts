import { BaseLogger } from 'logger/Logger';
import { GetSingleCategory } from '../../../../application/entities/categories/Gateway';
import { GetSingleCategoryError } from './Errors';
import { Category } from '../../../../application/entities/categories/Categories';

export type GetSingleCategoryDependencies = {
  logger: BaseLogger;
  getSingleCategory: GetSingleCategory;
};

export const getSingleCategory =
  ({ logger, getSingleCategory }: GetSingleCategoryDependencies) =>
  async ({ id }: { id: string }): Promise<Category> => {
    try {
      return await getSingleCategory(id as string);
    } catch (error) {
      logger.error('Error. Details: ', error);
      throw new GetSingleCategoryError(error);
    }
  };