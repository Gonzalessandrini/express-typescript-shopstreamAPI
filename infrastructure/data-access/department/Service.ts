
import { Department } from 'application/entities/department/Department';
import { CreateDepartment, GetDepartment, GetAllDepartments } from '../../../application/entities/department/Gateway';
import { BaseLogger } from '../../../logger/Logger';
import { CreateDepartmentError, GetAllDepartmentError, GetDepartmentError } from './Errors';
import { parseCreateDepartmentParams, parseCreateDepartmentReponse, parseGetDepartment } from './Parser';
import { CreateDepartmentRepository, GetAllDepartmentsRepository, GetDepartmentRepository } from './Repository';


export type DepartamentDependencies = {
  logger: BaseLogger;
};

export const createDepartment: (dependencies: DepartamentDependencies) => CreateDepartment =
  (dependencies) =>
  async (params): Promise<any> => {
    try {
      const paramsParsed = parseCreateDepartmentParams({
        ...params
      });

      const departmentSaved = await CreateDepartmentRepository({
        ...paramsParsed
      });

      return parseCreateDepartmentReponse(departmentSaved)
    } catch (error) {
      dependencies.logger.error('Error. Details:', error);
      throw new CreateDepartmentError(error);
    }
  };

export const getDepartment: (dependencies: DepartamentDependencies) => GetDepartment =
  (dependencies) =>
  async (departmentId): Promise<Department> => {
    try {
      const localDepartment = await GetDepartmentRepository(departmentId);
      if (!localDepartment) throw 'department not found';

      return parseGetDepartment(localDepartment);
    } catch (error) {
      dependencies.logger.error('Error. Details:', error);
      throw new GetDepartmentError(error);
    }
  };

export const getAllDepartments: (dependencies: DepartamentDependencies) => GetAllDepartments = (dependencies) => 
async (): Promise<any> => {
  try{
    const departments = await GetAllDepartmentsRepository();
    if (!departments) throw 'departments not found';
  
    return departments;
  } catch (error) {
  dependencies.logger.error('Error. Details:', error);
  throw new GetAllDepartmentError(error);
}
};
