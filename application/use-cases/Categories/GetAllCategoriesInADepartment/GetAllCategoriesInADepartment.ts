import { BaseLogger } from 'logger/Logger';
import { Category } from '../../../../application/entities/categories/Categories';
import { GetAllCategoriesInADepartment } from '../../../../application/entities/categories/Gateway';
import { GetAllCategoriesInADepartmentError } from './Errors';

export type GetAllCategoriesInADepartmentDependencies = {
  logger: BaseLogger;
  getAllCategoriesInADepartment: GetAllCategoriesInADepartment;
};

export const getAllCategoriesInADepartment =
  ({ logger, getAllCategoriesInADepartment }: GetAllCategoriesInADepartmentDependencies) =>
  async ({ departmentId }: { departmentId: string }): Promise<Category> => {
    try {
      return await getAllCategoriesInADepartment(departmentId as string);
    } catch (error) {
      logger.error('Error. Details: ', error);
      throw new GetAllCategoriesInADepartmentError(error);
    }
  };