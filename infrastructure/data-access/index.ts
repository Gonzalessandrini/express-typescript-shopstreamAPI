import { DataAccess, DataAccessDependencies } from './DataAccessTypes';
import { openConnection } from './mongoose/Db';
import department from './department';
import categories from './categories';
import customers from './customers';
import products from './products';
import cart from './cart';
import orders from './orders';

export const dataAccess = async ({ baseLogger, mongoose }: DataAccessDependencies): Promise<DataAccess> => {
  const logger = baseLogger('DataAccess');

  try {
    await openConnection(mongoose.uri, baseLogger('MongoDB'));

    const departmentServices = department(baseLogger)
    const categoriesServices = categories(baseLogger)
    const customersService = customers(baseLogger)
    const productsService = products(baseLogger)
    const cartSevice = cart(baseLogger)
    const orderService = orders(baseLogger)

    return {
      ...departmentServices,
      ...categoriesServices,
      ...customersService,
      ...productsService,
      ...cartSevice,
      ...orderService
    };
  } catch (e) {
    logger.error('Failed to initialize Data access with error:', e);
    throw e;
  }
};
