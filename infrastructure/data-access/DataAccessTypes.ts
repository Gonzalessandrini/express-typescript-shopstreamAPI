import { CreateDepartment, GetAllDepartments, GetDepartment } from 'application/entities/department/Gateway';
import { CreateCategory, GetAllCategories, GetAllCategoriesInADepartment, GetProductCategory, GetSingleCategory } from 'application/entities/categories/Gateway';
import { CreateNewCustomer, GetSingleCustomer, LoginCustomer, UpdateCustomerAddress, UpdateCustomerDetails } from 'application/entities/customer/Gateway';
import { BaseLoggerFactory } from '../../logger/Logger';
import { CreateProduct, GetAllProducts, GetSingleProduct } from 'application/entities/products/Gateway';
import { AddProductToCart, EmptyCart, GenerateCartUniqueId, GetProductsInCart, RemoveItemFromCart, UpdateItemQuantity } from 'application/entities/cart/Gateway';
import { CreateOrder, GetSingleOrder } from 'application/entities/orders/Gateway';

export type DataAccess = {
  createDepartment: CreateDepartment;
  getDepartment: GetDepartment;
  getAllDepartment: GetAllDepartments;

  getAllCategories: GetAllCategories;
  getAllCategoriesInADepartment: GetAllCategoriesInADepartment;
  getSingleCategory: GetSingleCategory;
  getProductCategory: GetProductCategory;
  createCategory: CreateCategory;

  createCustomer: CreateNewCustomer;
  getSingleCustomer: GetSingleCustomer;
  loginCustomer: LoginCustomer;
  updateCustomerDetails: UpdateCustomerDetails;
  updateCustomerAddress: UpdateCustomerAddress;

  createProduct: CreateProduct;
  getAllProducts: GetAllProducts;
  getSingleProduct: GetSingleProduct;

  generateCartUniqueId: GenerateCartUniqueId;
  addProductToShoppingCart: AddProductToCart;
  getProductsInCart: GetProductsInCart;
  updateItemQuantity: UpdateItemQuantity;
  emptyCart: EmptyCart;
  removeItemFromCart: RemoveItemFromCart;

  createOrder: CreateOrder;
  getSingleOrder: GetSingleOrder;
};

export type DataAccessDependencies = {
  http: {
    port: number;
    mocked: boolean;
  };
  baseLogger: BaseLoggerFactory;
  mongoose: {
    uri: string;
  };
};
