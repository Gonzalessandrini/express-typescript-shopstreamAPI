import { CreateCustomerParams, CreateCustomerResponse, Customer, LoginCredentials, LoginCustomerResponse, UpdateCustomerAddressParams, UpdateCustomerParams } from './Customer';

export type CreateNewCustomer = (customer: CreateCustomerParams) => Promise<CreateCustomerResponse>;
export type GetSingleCustomer = (id: string) => Promise<Customer>;
export type LoginCustomer = (credentials: LoginCredentials) => Promise<LoginCustomerResponse>;
export type UpdateCustomerDetails = (details: UpdateCustomerParams) => Promise<Customer>
export type UpdateCustomerAddress = (details: UpdateCustomerAddressParams) => Promise<Customer>