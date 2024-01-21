import { CreateDepartmentParams, CreateDepartmentResponse, Department } from '../../../application/entities/department/Department';
import { DepartmentModel } from './Schema';
import { CreateDepartmentParamsRepository } from './Types';

export const parseCreateDepartmentParams: (params: CreateDepartmentParams ) => CreateDepartmentParamsRepository = (params) => {
  return {
    name: params.name,
    description: params.description
  };
};

export const parseCreateDepartmentReponse: (params: CreateDepartmentParamsRepository) => CreateDepartmentResponse = (
  params: CreateDepartmentParamsRepository
) => {
  return {
    name: params.name,
    description: params.description
  };
};

export const parseGetDepartment: (params: DepartmentModel) => Department = (params: DepartmentModel) => {
  return {
    name: params.name,
    description: params.description
  };
};
