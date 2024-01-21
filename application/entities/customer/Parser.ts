import { validateOrThrow } from '../common/Helpers';
import { createCustomerSchema, updateCustomerAddressSchema, updateCustomerDetailsSchema } from './Schema';

type LoginCustomerInput = {
  email: unknown;
  password: unknown;
};

export type LoginCustomerValidatedInput = {
  email: string;
  password: string;
};

export const validateAndParseLoginCustomer = (params: LoginCustomerInput): LoginCustomerValidatedInput => {
  validateOrThrow(params, createCustomerSchema);
  return {
    email: params.email as string,
    password: params.password as string
  };
};

type CreateCustomerInput = {
    name: unknown;
    email: unknown;
    password: unknown;
};

export type CreateCustomerValidatedInput = {
    name: string;
    email: string;
    password: string;
};

export const validateAndParseCreateCustomer = (params: CreateCustomerInput): CreateCustomerValidatedInput => {
    validateOrThrow(params, createCustomerSchema);
    return {
      name: params.name as string,
      email: params.email as string,
      password: params.password as string
    };
  };

  type UpdateCustomerInput = {
    id: unknown;
    email: unknown;
    name: unknown;
    dayPhone: unknown;
    evePhone: unknown;
    mobPhone: unknown;
};

export type UpdateCustomerValidatedInput = {
    id: string;
    email: string;
    name: string;
    dayPhone: string;
    evePhone: string;
    mobPhone: string;
};

export const validateAndParseUpdateCustomerDetails = (params: UpdateCustomerInput): UpdateCustomerValidatedInput => {
    validateOrThrow(params, updateCustomerDetailsSchema);
    return {
        id: params.id as string,
        email: params.email as string,
        name: params.name as string,
        dayPhone: params.dayPhone as string,
        evePhone: params.evePhone as string,
        mobPhone: params.mobPhone as string
    };
};

type UpdateCustomerAddressInput = {
  id: unknown;
  address_1: unknown;
  address_2: unknown;
  city: unknown;
  region: unknown;
  postal_code: unknown;
};

export type UpdateCustomerAddressValidatedInput = {
  id: string;
  address_1: string;
  address_2: string | undefined;
  city: string;
  region: string;
  postal_code: string;
};

export const validateAndParseUpdateCustomerAddress = (params: UpdateCustomerAddressInput): UpdateCustomerAddressValidatedInput => {
  validateOrThrow(params, updateCustomerAddressSchema);
  return {
      id: params.id as string,
      address_1: params.address_1 as string,
      address_2: params.address_2 as string | undefined,
      city: params.city as string,
      region: params.region as string,
      postal_code: params.postal_code as string
  };
};
