import { LoginCustomer } from '../../../../application/entities/customer/Gateway';
import { BaseLogger } from '../../../../logger/Logger';
import { LoginCustomerError } from './Errors';
import { LoginCustomerResponse } from '../../../../application/entities/customer/Customer';
import { validateAndParseLoginCustomer } from '../../../../application/entities/customer/Parser';

export type LoginCustomerDependencies = {
  logger: BaseLogger;
  loginCustomer: LoginCustomer;
};

export const loginCustomer =
  ({ logger, loginCustomer }: LoginCustomerDependencies) =>
  async (params: any): Promise<LoginCustomerResponse> => {
    const validatedParams = validateAndParseLoginCustomer({
        email: params.email,
        password: params.password
    });
    try {
      return await loginCustomer({
        email: validatedParams.email,
        password: validatedParams.password
      });
    } catch (error) {
      console.log(error);
      logger.error('Error. Details: ', error);
      throw new LoginCustomerError(error);
    }
  };
