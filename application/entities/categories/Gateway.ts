import { CreateCategoryParams, CreateCategoryResponse, Category } from './Categories';

export type CreateCategory = (categories: CreateCategoryParams) => Promise<CreateCategoryResponse>;
export type GetSingleCategory = (id: string) => Promise<Category>;
export type GetAllCategoriesInADepartment = (departmentId: string) => Promise<any>;
export type GetAllCategories = () => Promise<any>
export type GetProductCategory = (id: string) => Promise<any>;