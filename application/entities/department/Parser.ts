import { validateOrThrow } from '../common/Helpers';
import { createDepartmentSchema } from './Schema';

type CreateDepartmentInput = {
    name: unknown;
    description: unknown;
};

export type CreateDepartmentValidatedInput = {
    name: string;
    description: string;
};

export const validateAndParseCreateDepartment = (params: CreateDepartmentInput): CreateDepartmentValidatedInput => {
    validateOrThrow(params, createDepartmentSchema);
    return {
      name: params.name as string,
      description: params.description as string
    };
  };