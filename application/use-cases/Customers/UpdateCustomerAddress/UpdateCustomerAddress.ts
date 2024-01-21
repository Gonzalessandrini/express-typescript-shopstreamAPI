import { UpdateCustomerAddress } from '../../../../application/entities/customer/Gateway';
import { BaseLogger } from '../../../../logger/Logger';
import { UpdateCustomerAddressError } from './Errors';
import { Customer } from '../../../../application/entities/customer/Customer';
import { validateAndParseUpdateCustomerAddress } from '../../../../application/entities/customer/Parser';

export type UpdateCustomerDetailsDependencies = {
  logger: BaseLogger;
  updateCustomerAddress: UpdateCustomerAddress;
};

export const updateCustomerAddress =
  ({ logger, updateCustomerAddress }: UpdateCustomerDetailsDependencies) =>
  async (params: any): Promise<Customer> => {
    console.log('Params useCases: ', params);
    const validatedParams = validateAndParseUpdateCustomerAddress({
      id: params.id,
      address_1: params.address_1,
      address_2: params.address_2,
      city: params.city,
      region: params.region,
      postal_code: params.postal_code
    });
    
    console.log('validated params: ', validatedParams);
    
    try {
      return await updateCustomerAddress({
        id: validatedParams.id,
        address_1: validatedParams.address_1,
        address_2: validatedParams.address_2,
        city: validatedParams.city,
        region: validatedParams.region,
        postal_code: validatedParams.postal_code
      });
    } catch (error) {
      console.log(error);
      logger.error('Error. Details: ', error);
      throw new UpdateCustomerAddressError(error);
    }
  };
