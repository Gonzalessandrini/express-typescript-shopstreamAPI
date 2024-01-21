import { BaseLogger } from 'logger/Logger';
import { GetDepartment } from '../../../../application/entities/department/Gateway';
import { GetDepartmentError } from './Errors';
import { Department } from '../../../../application/entities/department/Department';

export type GetDepartmentDependencies = {
  logger: BaseLogger;
  getDepartment: GetDepartment;
};

export const getDepartment =
  ({ logger, getDepartment }: GetDepartmentDependencies) =>
  async ({ id }: { id: string }): Promise<Department> => {
    try {
      return await getDepartment(id as string);
    } catch (error) {
      logger.error('Error. Details: ', error);
      throw new GetDepartmentError(error);
    }
  };