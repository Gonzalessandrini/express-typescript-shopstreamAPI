import { UpdateCustomerDetails } from '../../../../application/entities/customer/Gateway';
import { BaseLogger } from '../../../../logger/Logger';
import { UpdateCustomerDetailsError } from './Errors';
import { Customer } from '../../../../application/entities/customer/Customer';
import { validateAndParseUpdateCustomerDetails } from '../../../../application/entities/customer/Parser';

export type UpdateCustomerDetailsDependencies = {
  logger: BaseLogger;
  updateCustomerDetails: UpdateCustomerDetails;
};

export const UpdateCustomer =
  ({ logger, updateCustomerDetails }: UpdateCustomerDetailsDependencies) =>
  async (params: any): Promise<Customer> => {
    const validatedParams = validateAndParseUpdateCustomerDetails({
        id: params.id,
        name: params.name,
        email: params.email,
        evePhone: params.evePhone,
        dayPhone: params.dayPhone,
        mobPhone: params.mobPhone
    });
    try {
      return await updateCustomerDetails({
        id: validatedParams.id,
        email: validatedParams.email,
        name: validatedParams.name,
        eve_phone: validatedParams.evePhone,
        day_phone: validatedParams.dayPhone,
        mob_phone: validatedParams.mobPhone
      });
    } catch (error) {
      console.log(error);
      logger.error('Error. Details: ', error);
      throw new UpdateCustomerDetailsError(error);
    }
  };
