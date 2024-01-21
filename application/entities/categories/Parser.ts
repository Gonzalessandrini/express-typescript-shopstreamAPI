import { validateOrThrow } from '../common/Helpers';
import { createCategoriesSchema } from './Schema';

type CreateCategoriesInput = {
    name: unknown;
    description: unknown;
    departmentId: unknown;
};

export type CreateCategoriesValidatedInput = {
    name: string;
    description: string;
    departmentId: string;
};

export const validateAndParseCreateCategories = (params: CreateCategoriesInput): CreateCategoriesValidatedInput => {
    validateOrThrow(params, createCategoriesSchema);
    return {
      name: params.name as string,
      description: params.description as string,
      departmentId: params.departmentId as string
    };
  };