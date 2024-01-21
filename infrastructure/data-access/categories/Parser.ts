import { CreateCategoryParams, CreateCategoryResponse, Category } from '../../../application/entities/categories/Categories';
import { CategoryModel } from './Schema';
import { CreateCategoryParamsRepository } from './Types';

export const parseCreateCategoryParams: (params: CreateCategoryParams ) => CreateCategoryParamsRepository = (params) => {
  return {
    name: params.name,
    description: params.description,
    departmentId: params.departmentId
  };
};

export const parseCreateCategoryReponse: (params: CreateCategoryParamsRepository) => CreateCategoryResponse = (
  params: CreateCategoryParamsRepository
) => {
  return {
    name: params.name,
    description: params.description,
    departmentId: params.departmentId
  };
};

export const parseGetSingleCategory: (params: CategoryModel) => Category = (params: CategoryModel) => {
  return {
    name: params.name,
    description: params.description,
    departmentId: params.departmentId
  };
};

export const parseGetAllCategoriesInADepartment: (params: CategoryModel) => Category = (params: CategoryModel) => {
  return {
    name: params.name,
    description: params.description,
    departmentId: params.departmentId
  };
};