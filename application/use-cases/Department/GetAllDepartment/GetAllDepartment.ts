import { BaseLogger } from 'logger/Logger';
import { GetAllDepartments } from '../../../../application/entities/department/Gateway';
import { GetAllDepartmentError } from './Errors';

export type GetDepartmentDependencies = {
  logger: BaseLogger;
  getAllDepartment: GetAllDepartments;
};

export const getAllDepartment =
  ({ logger, getAllDepartment }: GetDepartmentDependencies) =>
  async (): Promise<any> => {
    try {
      return await getAllDepartment();
    } catch (error) {
      logger.error('Error. Details: ', error);
      throw new GetAllDepartmentError(error);
    }
  };