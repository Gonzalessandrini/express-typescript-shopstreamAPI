
import { CreateNewCustomer, GetSingleCustomer, LoginCustomer, UpdateCustomerAddress, UpdateCustomerDetails } from '../../../application/entities/customer/Gateway';
import { BaseLogger } from '../../../logger/Logger';
import { CreateCustomerError, GetSingleCustomerError, LoginCustomerError } from './Errors';
import { parseCreateCustomerParams, parseCreateCustomerReponse, parseGetCustomer, parseLoginCustomerParams, parseUpdateCustomerAddressParams, parseUpdateCustomerDetailsParams } from './Parser';
import { CreateCustomerRepository, GetCustomerRepository, GetSingleCustomerRepository, UpdateCustomerAddressRepository, UpdateCustomerDetailsRepository } from './Repository';
import { Customer, CreateCustomerResponse, LoginCustomerResponse } from 'application/entities/customer/Customer';
import { initConfig } from '../../../config/index';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export type CustomerDependencies = {
  logger: BaseLogger;
};

const config = initConfig()

export const createCustomer: (dependencies: CustomerDependencies) => CreateNewCustomer =
  (dependencies) =>
  async (params): Promise<CreateCustomerResponse> => {
    const passwordHash = await bcrypt.hash(params.password, 15)
    try {
      const paramsParsed = parseCreateCustomerParams({
        ...params,
        password: passwordHash
      });

      const customerSaved = await CreateCustomerRepository({
        ...paramsParsed
      });

      return parseCreateCustomerReponse(customerSaved)
    } catch (error) {
      dependencies.logger.error('Error. Details:', error);
      throw new CreateCustomerError(error);
    }
  };

export const getSingleCustomer: (dependencies: CustomerDependencies) => GetSingleCustomer =
  (dependencies) =>
  async (CustomerId): Promise<Customer> => {
    try {
      const localCustomer = await GetSingleCustomerRepository(CustomerId);
      if (!localCustomer) throw 'Customer not found';

      return parseGetCustomer(localCustomer);
    } catch (error) {
      dependencies.logger.error('Error. Details:', error);
      throw new GetSingleCustomerError(error);
    }
  };

  export const loginCustomer: (dependencies: CustomerDependencies) => LoginCustomer =
  (dependencies) =>
  async (params): Promise<LoginCustomerResponse> => {

    try {
      const paramsParsed = parseLoginCustomerParams({
        ...params
      });

      const user = await GetCustomerRepository(paramsParsed.customer.email)

      const passwordCorrect = user == null
      ? false
      : await bcrypt.compare(paramsParsed.customer.password, user.password) 

      if (!(user && passwordCorrect)) throw 'Incorrect user or password';

      const userForToken = {
        id: user._id,
        email: user.email
      }
    
      const token = jwt.sign(
        userForToken,
        config.jwt.secret,
        {
          expiresIn: 60 * 60 * 24 * 7
        }
      )

      const loginResponse: LoginCustomerResponse = {
        customer: {
          name: user.name,
          email: user.email,
          password: user.password,
          address_1: user.address_1 || null,
          address_2: user.address_2 || null,
          city: user.city || null,
          region: user.region || null,
          postal_code: user.postal_code || null,
          shipping_region_id: user.shipping_region_id,
          credit_card: user.credit_card || null,
          day_phone: user.day_phone || null,
          eve_phone: user.eve_phone || null,
          mob_phone: user.mob_phone || null
        },
        accessToken: token,
      };

      return loginResponse;

    } catch (error) {
      dependencies.logger.error('Error. Details:', error);
      throw new LoginCustomerError(error);
    }
  };

  export const updateCustomerDetails: (dependencies: CustomerDependencies) => UpdateCustomerDetails =
  (dependencies) =>
  async (params): Promise<any> => {
    try {
      const paramsParsed = parseUpdateCustomerDetailsParams({
        ...params
      });
      const updatedCustomer = await UpdateCustomerDetailsRepository(params.id,{
        ...paramsParsed
      });

      return updatedCustomer
    } catch (error) {
      dependencies.logger.error('Error. Details:', error);
      throw new CreateCustomerError(error);
    }
  };

  export const updateCustomerAddress: (dependencies: CustomerDependencies) => UpdateCustomerAddress =
  (dependencies) =>
  async (params): Promise<any> => {
    console.log('----------------------------------------------------------------')
    console.log('Params: ', params);
    console.log('----------------------------------------------------------------')
    try {
      const paramsParsed = parseUpdateCustomerAddressParams({
        ...params
      });
      const updatedCustomerAddress = await UpdateCustomerAddressRepository(params.id, {
        ...paramsParsed
      });

      return updatedCustomerAddress;
    } catch (error) {
      dependencies.logger.error('Error. Details:', error);
      throw new Error('Update Customer Address Error: ' + error); // Puedes personalizar el mensaje de error según tus necesidades
    }
  };
