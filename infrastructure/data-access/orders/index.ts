import { BaseLoggerFactory } from '../../../logger/Logger';
import { createOrder, getSingleOrder } from './Service';

export default (loggerFactory: BaseLoggerFactory) => ({
    createOrder: createOrder({ logger: loggerFactory('CreateOrder') }),
    getSingleOrder: getSingleOrder({ logger: loggerFactory('GetSingleOrder') }),
});
