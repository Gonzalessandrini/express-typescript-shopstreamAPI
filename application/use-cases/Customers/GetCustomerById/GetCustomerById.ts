import { BaseLogger } from 'logger/Logger';
import { GetSingleCustomer } from '../../../../application/entities/customer/Gateway';
import { GetCustomerByIdError } from './Errors';
import { Customer } from '../../../../application/entities/customer/Customer';

export type GetSingleCategoryDependencies = {
  logger: BaseLogger;
  getSingleCustomer: GetSingleCustomer;
};

export const getCustomerById =
  ({ logger, getSingleCustomer }: GetSingleCategoryDependencies) =>
  async ({ id }: { id: string }): Promise<Customer> => {
    try {
      return await getSingleCustomer(id as string);
    } catch (error) {
      logger.error('Error. Details: ', error);
      throw new GetCustomerByIdError(error);
    }
  };