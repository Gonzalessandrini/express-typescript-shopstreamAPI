import { BaseLoggerFactory } from '../../logger/Logger';
import { initialSetup } from './Setup/initialSetup/InitialSetup';
import { checkStatus } from './Status/checkStatus/CheckStatus';

import { getAllDepartment } from './Department/GetAllDepartment/GetAllDepartment';
import { createDepartment } from './Department/CreateDepartment/CreateDepartment';
import { getDepartment } from './Department/GetDepartment/GetDepartment';

import { getAllCategories } from './Categories/GetAllCategories/GetAllCategories';
import { getAllCategoriesInADepartment } from './Categories/GetAllCategoriesInADepartment/GetAllCategoriesInADepartment';
import { getSingleCategory } from './Categories/GetSingleCategory/GetSingleCategory';
import { createCategory } from './Categories/CreateACategory/CreateACategory';

import { createNewCustomer } from './Customers/CreateACustomer/CreateACustomer';
import { getCustomerById } from './Customers/GetCustomerById/GetCustomerById';
import { loginCustomer } from './Customers/LoginCustomer/LoginCustomer';
import { UpdateCustomer } from './Customers/UpdateCustomerDetails/UpdateCustomerDetails';
import { updateCustomerAddress } from './Customers/UpdateCustomerAddress/UpdateCustomerAddress';

import { createProduct } from './Products/CreateProduct/CreateProduct';
import { getAllProducts } from './Products/GetAllProducts/GetAllProducts';
import { getSingleProduct } from './Products/GetASingleProduct/GetSingleProduct';
import { getProductCategory } from './Categories/GetProductCategory/GetProductCategory';

import { generateCartUniqueId } from './Cart/GenerateCartUniqueId/GenerateCartUniqueId';
import { addProductToShoppingCart } from './Cart/AddProductToShoppingCart/AddProductToShoppingCart';
import { getProductsInCart } from './Cart/GetProductsInCart/GetProductsInCart';
import { updateItemQuantity } from './Cart/UpdateItemQuantity/UpdateItemQuantity';
import { emptyCart } from './Cart/EmptyCart/EmptyCart';
import { removeItemFromCart } from './Cart/RemoveItemFromCart/RemoveItemFromCart';
import { createOrder } from './Orders/CreateOrder/CreateOrder';
import { getSingleOrder } from './Orders/GetAnOrder/GetAnOrder';


export const useCaseFactory = (dependencies: any, baseLogger: BaseLoggerFactory) => ({
  initialSetup: initialSetup({ ...dependencies, logger: baseLogger('InitialSetup') }),

  getDepartment: getDepartment({ ...dependencies, logger: baseLogger('GetDepartment') }),
  getAllDepartment: getAllDepartment({ ...dependencies, logger: baseLogger('GetAllDepartment') }),
  createDepartment: createDepartment({ ...dependencies, logger: baseLogger('CreateDepartment') }),

  getAllCategories: getAllCategories({ ...dependencies, logger: baseLogger('GetAllCategories')}),
  getAllCategoriesInADepartment: getAllCategoriesInADepartment({ ...dependencies, logger: baseLogger('GetAllCategoriesInADepartment')}),
  getSingleCategory: getSingleCategory({ ...dependencies, logger: baseLogger('GetSingleCategory')}),
  getProductCategory: getProductCategory({ ...dependencies, logger: baseLogger('GetProductCategory')}),
  createCategory: createCategory({ ...dependencies, logger: baseLogger('CreateCategory')}),

  createCustomer: createNewCustomer({ ...dependencies, logger: baseLogger('CreateCategory')}),
  getSingleCustomer: getCustomerById({ ...dependencies, logger: baseLogger('CreateCategory')}),
  loginCustomer: loginCustomer({ ...dependencies, logger: baseLogger('LoginCustomer')}),
  updateCustomerDetails: UpdateCustomer({ ...dependencies, logger: baseLogger('UpdateCustomerDetails')}),
  updateCustomerAddress: updateCustomerAddress({ ...dependencies, logger: baseLogger('UpdateCustomerAddress')}),

  createProduct: createProduct({ ...dependencies, logger: baseLogger('CreateProduct')}),
  getAllProducts: getAllProducts({ ...dependencies, logger: baseLogger('GetAllProducts')}),
  getSingleProduct: getSingleProduct({ ...dependencies, logger: baseLogger('GetSingleProduct')}),

  generateCartUniqueId: generateCartUniqueId({ ...dependencies, logger: baseLogger('GenerateCartUniqueId')}),
  addProductToShoppingCart: addProductToShoppingCart({ ...dependencies, logger: baseLogger('AddProductToShoppingCart')}),
  getProductsInCart: getProductsInCart({ ...dependencies, logger: baseLogger('GetProductsInCart')}),
  updateItemsQuantity: updateItemQuantity({ ...dependencies, logger: baseLogger('UpdateItemQuantity')}),
  emptyCart: emptyCart({ ...dependencies, logger: baseLogger('EmptyCart')}),
  removeItemFromCart: removeItemFromCart({ ...dependencies, logger: baseLogger('RemoveItemFromCart')}),

  createOrder: createOrder({ ...dependencies, logger: baseLogger('CreateAnOrder')}),
  getSingleOrder: getSingleOrder({ ...dependencies, logger: baseLogger('CreateAnOrder')}),

  checkStatus: checkStatus()
});
