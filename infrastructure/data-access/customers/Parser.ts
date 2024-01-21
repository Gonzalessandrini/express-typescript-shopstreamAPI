import { CreateCustomerParams, CreateCustomerResponse, Customer, LoginCustomerResponse, UpdateCustomerAddressParams, UpdateCustomerParams } from '../../../application/entities/customer/Customer';
import { CustomerModel } from './Schema';
import { CreateCustomerParamsRepository, LoginCustomerParamsRepository, UpdateCustomerAddressParamsRepository, UpdateCustomerParamsRepository } from './Types';

export const parseCreateCustomerParams: (params: CreateCustomerParams ) => CreateCustomerParamsRepository = (params) => {
  return {
    name: params.name,
    email: params.email,
    password: params.password
  };
};

export const parseCreateCustomerReponse: (params: CreateCustomerParamsRepository) => CreateCustomerResponse = (
  params: CreateCustomerParamsRepository
) => {
  return {
    name: params.name,
    email: params.email,
    password: params.password,
    address_1: null,
    address_2: null,
    city: null,
    region: null,
    postal_code: null,
    shipping_region_id: 0,
    credit_card: null,
    day_phone: null,
    eve_phone: null,
    mob_phone: null,
  };
};

export const parseGetCustomer: (params: CustomerModel) => Customer = (params: CustomerModel) => {
  return {
    name: params.name,
    email: params.email,
    password: params.password,
    address_1: params.address_1,
    address_2: params.address_2,
    city: params.city,
    region: params.region,
    postal_code: params.postal_code,
    shipping_region_id: params.shipping_region_id,
    credit_card: params.credit_card,
    day_phone: params.day_phone,
    eve_phone: params.eve_phone,
    mob_phone: params.mob_phone,
  };
};

export const parseLoginCustomerParams: (params: LoginCustomerParamsRepository) => LoginCustomerResponse = (params: LoginCustomerParamsRepository) => {
  return {
      customer: {
          name: '',
          email: params.email,
          password: params.password,
          address_1: null,
          address_2: null,
          city: null,
          region: null,
          postal_code: null,
          shipping_region_id: 0,
          credit_card: null,
          day_phone: null,
          eve_phone: null,
          mob_phone: null,
      },
      accessToken: 'generatedAccessToken',
  };
};

export const parseUpdateCustomerDetailsParams: (params: UpdateCustomerParams ) => UpdateCustomerParamsRepository = (params) => {
  return {
    name: params.name,
    email: params.email,
    eve_phone: params.eve_phone,
    day_phone: params.day_phone,
    mob_phone: params.mob_phone
  };
};

export const parseUpdateCustomerDetailsResponse: (params: CustomerModel) => Customer = (
  params: CreateCustomerParamsRepository
) => {
  return {
    name: params.name,
    email: params.email,
    password: params.password,
    address_1: null,
    address_2: null,
    city: null,
    region: null,
    postal_code: null,
    shipping_region_id: 0,
    credit_card: null,
    day_phone: null,
    eve_phone: null,
    mob_phone: null,
  };
};

export const parseUpdateCustomerAddressParams: (params: UpdateCustomerAddressParams) => UpdateCustomerAddressParamsRepository = (params) => {
  const parsedAddress2 = typeof params.address_2 === 'string' ? params.address_2 : '';
  
  return {
    address_1: params.address_1 as string,
    address_2: parsedAddress2,
    city: params.city as string,
    region: params.region as string,
    postal_code: params.postal_code as string,
  };
};
