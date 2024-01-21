import { BaseLoggerFactory } from '../../../logger/Logger';
import { createCustomer, getSingleCustomer, loginCustomer, updateCustomerAddress, updateCustomerDetails } from './Service';

export default (loggerFactory: BaseLoggerFactory) => ({
    createCustomer: createCustomer({ logger: loggerFactory('CreateCustomerDA') }),
    getSingleCustomer: getSingleCustomer({ logger: loggerFactory('GetSingleCustomerDA') }),
    loginCustomer: loginCustomer({ logger: loggerFactory('LoginCustomerDA') }),
    updateCustomerDetails: updateCustomerDetails({ logger: loggerFactory('UpdateCustomerDA') }),
    updateCustomerAddress: updateCustomerAddress({ logger: loggerFactory('UpdateCustomerAddressDA') })
});
