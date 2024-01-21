
import { CreateCategory, GetSingleCategory, GetAllCategories, GetAllCategoriesInADepartment, GetProductCategory } from '../../../application/entities/categories/Gateway';
import { BaseLogger } from '../../../logger/Logger';
import { GetSingleProductRepository } from '../products/Repository';
import { CreateCategoryError, GetAllCategoriesError, GetAllCategoriesInADepartmentError, GetProductCategoryError, GetSingleCategoryError } from './Errors';
import { parseCreateCategoryParams, parseCreateCategoryReponse, parseGetAllCategoriesInADepartment, parseGetSingleCategory } from './Parser';
import { CreateCategoryRepository, GetAllCategoriesInADepartmentRepository, GetAllCategoriesRepository, GetSingleCategoryRepository } from './Repository';
import { Category, CreateCategoryResponse, GetProductCategoryResponse } from 'application/entities/categories/Categories';

export type CategoriesDependencies = {
  logger: BaseLogger;
};

export const createCategory: (dependencies: CategoriesDependencies) => CreateCategory =
  (dependencies) =>
  async (params): Promise<CreateCategoryResponse> => {
    try {
      const paramsParsed = parseCreateCategoryParams({
        ...params
      });

      const categorySaved = await CreateCategoryRepository({
        ...paramsParsed
      });

      return parseCreateCategoryReponse(categorySaved)
    } catch (error) {
      dependencies.logger.error('Error. Details:', error);
      throw new CreateCategoryError(error);
    }
  };

export const getSingleCategory: (dependencies: CategoriesDependencies) => GetSingleCategory =
  (dependencies) =>
  async (categoryId): Promise<Category> => {
    try {

      console.log('--------------------------------------------------------')
      console.log('categoryId: ', categoryId);
      console.log('--------------------------------------------------------')
      const localCategory = await GetSingleCategoryRepository(categoryId);
      if (!localCategory) throw 'category not found';

      return parseGetSingleCategory(localCategory);
    } catch (error) {
      dependencies.logger.error('Error. Details:', error);
      throw new GetSingleCategoryError(error);
    }
  };

export const getAllCategories: (dependencies: CategoriesDependencies) => GetAllCategories = (dependencies) => 
async (): Promise<any> => {
  try{
    const categories = await GetAllCategoriesRepository();
    if (!categories) throw 'categories not found';
  
    return categories;
  } catch (error) {
  dependencies.logger.error('Error. Details:', error);
  throw new GetAllCategoriesError(error);
}
};

export const getAllCategoriesInADepartment: (dependencies: CategoriesDependencies) => GetAllCategoriesInADepartment =
  (dependencies) =>
  async (departmentId): Promise<Category> => {
    try {
      const localCategoriesInDepartment = await GetAllCategoriesInADepartmentRepository(departmentId);
      if (!localCategoriesInDepartment) throw 'categories not found';

      return localCategoriesInDepartment
    } catch (error) {
      dependencies.logger.error('Error. Details:', error);
      throw new GetAllCategoriesInADepartmentError(error);
    }
  };

export const getProductCategory: (dependencies: CategoriesDependencies) => GetProductCategory =
  (dependencies) =>
  async (productId): Promise<GetProductCategoryResponse> => {
    try {
      const localProduct = await GetSingleProductRepository(productId);
      if (!localProduct) throw 'product not found';

      const productCategory = await GetSingleCategoryRepository(localProduct.categoryId);

      if (!productCategory) throw 'Category not found for this product' 

      return {
        category_id: productCategory._id,
        department_id: productCategory.departmentId,
        name: productCategory.name,
      }

    } catch (error) {
      dependencies.logger.error('Error. Details:', error);
      throw new GetProductCategoryError(error);
    }
};
  