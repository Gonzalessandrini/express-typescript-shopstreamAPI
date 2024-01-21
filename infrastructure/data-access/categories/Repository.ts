import { CategoryModel } from './Schema';
import { CreateCategoryParamsRepository } from './Types';

export const GetSingleCategoryRepository = async (_id: string): Promise<CategoryModel | null> => {
  return await CategoryModel.findOne({ _id })
};

export const CreateCategoryRepository = async (Category: CreateCategoryParamsRepository): Promise<CategoryModel> => {
  return await CategoryModel.create(Category);
};

export const GetAllCategoriesRepository = async (): Promise<any> => {
  return await CategoryModel.find({})
}

export const GetAllCategoriesInADepartmentRepository = async (departmentId: string): Promise<any> => {
  return await CategoryModel.find({departmentId})
}
