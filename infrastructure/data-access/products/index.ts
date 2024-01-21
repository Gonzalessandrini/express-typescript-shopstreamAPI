import { BaseLoggerFactory } from '../../../logger/Logger';
import { createProduct, getAllProducts, getSingleProduct } from './Service';

export default (loggerFactory: BaseLoggerFactory) => ({
    createProduct: createProduct({ logger: loggerFactory('CreateProduct') }),
    getAllProducts: getAllProducts({ logger: loggerFactory('GetAllProducts') }),
    getSingleProduct: getSingleProduct({ logger: loggerFactory('GetSingleProduct') })
});
