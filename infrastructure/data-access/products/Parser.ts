import { CreateProductsParams, CreateProductsResponse, Products } from '../../../application/entities/products/Products';
import { ProductModel } from './Schema';
import { CreateProductParamsRepository } from './Types';

export const parseCreateProductParams: (params: CreateProductsParams ) => CreateProductParamsRepository = (params) => {
    return {
        name: params.name,
        description: params.description,
        price: params.price,
        discounted_price: params.discounted_price,
        thumbnail: params.thumbnail,
        categoryId: params.categoryId
    };
  };
  
  export const parseCreateProductResponse: (params: ProductModel) => CreateProductsResponse = (
    params: ProductModel
  ) => {
    return {
        name: params.name,
        description: params.description,
        price: params.price,
        discounted_price: params.discounted_price,
        thumbnail: params.thumbnail,
        categoryId: params.categoryId
    };
  };

  export const parseGetProduct: (params: ProductModel) => Products = (params: ProductModel) => {
    return {
      name: params.name,
      description: params.description,
      price: params.price,
      discounted_price: params.discounted_price,
      thumbnail: params.thumbnail,
      categoryId: params.categoryId
    };
  };
  
