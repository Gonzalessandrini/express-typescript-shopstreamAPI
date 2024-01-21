import { CreateNewCustomer } from '../../../../application/entities/customer/Gateway';
import { BaseLogger } from '../../../../logger/Logger';
import { CreateCustomerError } from './Errors';
import { CreateCustomerResponse } from '../../../../application/entities/customer/Customer';
import { validateAndParseCreateCustomer } from '../../../../application/entities/customer/Parser';

export type CreateCustomerDependencies = {
  logger: BaseLogger;
  createCustomer: CreateNewCustomer;
};

export const createNewCustomer =
  ({ logger, createCustomer }: CreateCustomerDependencies) =>
  async (params: any): Promise<CreateCustomerResponse> => {
    const validatedParams = validateAndParseCreateCustomer({
        name: params.name,
        email: params.email,
        password: params.password
    });

    try {
      return await createCustomer({
        name: validatedParams.name,
        email: validatedParams.email,
        password: validatedParams.password
      });
    } catch (error) {
      console.log(error);
      logger.error('Error. Details: ', error);
      throw new CreateCustomerError(error);
    }
  };
