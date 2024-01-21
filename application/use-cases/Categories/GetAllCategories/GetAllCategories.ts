import { BaseLogger } from 'logger/Logger';
import { GetAllCategories } from '../../../../application/entities/categories/Gateway';
import { GetAllCategoriesError } from './Errors';

export type GetAllCategoriesDependencies = {
  logger: BaseLogger;
  getAllCategories: GetAllCategories;
};

export const getAllCategories =
  ({ logger, getAllCategories }: GetAllCategoriesDependencies) =>
  async (): Promise<any> => {
    try {
      return await getAllCategories();
    } catch (error) {
      logger.error('Error. Details: ', error);
      throw new GetAllCategoriesError(error);
    }
  };