import { CreateDepartment } from '../../../../application/entities/department/Gateway';
import { BaseLogger } from '../../../../logger/Logger';
import { CreateDepartmentResponse } from 'application/entities/department/Department';
import { validateAndParseCreateDepartment } from '../../../../application/entities/department/Parser';
import { CreateDeparmentError } from './Errors';

export type CreateDepartmentDependencies = {
  logger: BaseLogger;
  createDepartment: CreateDepartment;
};

export const createDepartment =
  ({ logger, createDepartment }: CreateDepartmentDependencies) =>
  async (params: any): Promise<CreateDepartmentResponse> => {
    const validatedParams = validateAndParseCreateDepartment({
        name: params.name,
        description: params.description
    });

    try {
      return await createDepartment({
        name: validatedParams.name,
        description: validatedParams.description
      });
    } catch (error) {
      console.log(error);
      logger.error('Error. Details: ', error);
      throw new CreateDeparmentError(error);
    }
  };
