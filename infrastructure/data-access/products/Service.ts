
import { Products } from 'application/entities/products/Products';
import { CreateProduct, GetAllProducts, GetSingleProduct } from '../../../application/entities/products/Gateway';
import { BaseLogger } from '../../../logger/Logger';
import { CreateProductError, GetAllProductsError, GetSingleProductError} from './Errors';
import { parseCreateProductParams, parseCreateProductResponse, parseGetProduct } from './Parser';
import { CreateProductRepository, GetAllProductsRepository, GetSingleProductRepository } from './Repository';

export type ProductsDependencies = {
  logger: BaseLogger;
};

export const createProduct: (dependencies: ProductsDependencies) => CreateProduct =
  (dependencies) =>
  async (params): Promise<any> => {
    try {
      const paramsParsed = parseCreateProductParams({
        ...params
      });

      const departmentSaved = await CreateProductRepository({
        ...paramsParsed
      });

      return parseCreateProductResponse(departmentSaved)
    } catch (error) {
      dependencies.logger.error('Error. Details:', error);
      throw new CreateProductError(error);
    }
  };

  export const getAllProducts: (dependencies: ProductsDependencies) => GetAllProducts = (dependencies) => 
  async (): Promise<any> => {
    try{
      const products = await GetAllProductsRepository();
      if (!products) throw 'products not found';
    
      return products;
    } catch (error) {
    dependencies.logger.error('Error. Details:', error);
    throw new GetAllProductsError(error);
  }
};

export const getSingleProduct: (dependencies: ProductsDependencies) => GetSingleProduct =
  (dependencies) =>
  async (productId): Promise<Products> => {
    try {
      const localProduct = await GetSingleProductRepository(productId);
      if (!localProduct) throw 'product not found';

      return parseGetProduct(localProduct);
    } catch (error) {
      dependencies.logger.error('Error. Details:', error);
      throw new GetSingleProductError(error);
    }
  };
