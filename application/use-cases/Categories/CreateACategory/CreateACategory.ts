import { CreateCategory } from '../../../../application/entities/categories/Gateway';
import { BaseLogger } from '../../../../logger/Logger';
import { CreateCategoryError } from './Errors';
import { CreateCategoryResponse } from '../../../../application/entities/categories/Categories';
import { validateAndParseCreateCategories } from '../../../../application/entities/categories/Parser';

export type CreateCategoryDependencies = {
  logger: BaseLogger;
  createCategory: CreateCategory;
};

export const createCategory =
  ({ logger, createCategory }: CreateCategoryDependencies) =>
  async (params: any): Promise<CreateCategoryResponse> => {
    const validatedParams = validateAndParseCreateCategories({
        name: params.name,
        description: params.description,
        departmentId: params.departmentId
    });

    try {
      return await createCategory({
        name: validatedParams.name,
        description: validatedParams.description,
        departmentId: validatedParams.departmentId
      });
    } catch (error) {
      console.log(error);
      logger.error('Error. Details: ', error);
      throw new CreateCategoryError(error);
    }
  };
