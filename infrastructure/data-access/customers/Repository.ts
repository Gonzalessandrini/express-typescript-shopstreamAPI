import { CustomerModel } from './Schema';
import { CreateCustomerParamsRepository, UpdateCustomerAddressParamsRepository, UpdateCustomerParamsRepository } from './Types';

export const GetSingleCustomerRepository = async (_id: string): Promise<CustomerModel | null> => {
  return await CustomerModel.findOne({ _id })
};

export const CreateCustomerRepository = async (Customer: CreateCustomerParamsRepository): Promise<CustomerModel> => {
  return await CustomerModel.create(Customer);
};

export const GetCustomerRepository = async (email: string): Promise<CustomerModel | null> => {
  return await CustomerModel.findOne({ email })
};

export const UpdateCustomerDetailsRepository = async (_id: string, details: UpdateCustomerParamsRepository ): Promise<CustomerModel | null> => {
  return await CustomerModel.findByIdAndUpdate( _id, details, { new: true } )
};

export const UpdateCustomerAddressRepository = async (_id: string, address: UpdateCustomerAddressParamsRepository ): Promise<CustomerModel | null> => {
  return await CustomerModel.findByIdAndUpdate( _id, address, { new: true } )
};
