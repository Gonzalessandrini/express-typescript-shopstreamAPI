import { CreateProduct } from '../../../../application/entities/products/Gateway';
import { BaseLogger } from '../../../../logger/Logger';
import { CreateProductsResponse } from 'application/entities/products/Products';
import { validateAndParseCreateProduct } from '../../../../application/entities/products/Parser';
import { CreateProductError } from './Errors';

export type CreateProductsDependencies = {
  logger: BaseLogger;
  createProduct: CreateProduct;
};

export const createProduct =
  ({ logger, createProduct }: CreateProductsDependencies) =>
  async (params: any): Promise<CreateProductsResponse> => {
    const validatedParams = validateAndParseCreateProduct({
      name: params.name,
      description: params.description,
      price: params.price,
      discounted_price: params.discounted_price,
      thumbnail: params.thumbnail,
      categoryId: params.categoryId
    });

    try {
      return await createProduct({
        name: validatedParams.name,
        description: validatedParams.description,
        price: validatedParams.price,
        discounted_price: validatedParams.discounted_price,
        thumbnail: validatedParams.thumbnail,
        categoryId: validatedParams.categoryId
      });
    } catch (error) {
      console.log(error);
      logger.error('Error. Details: ', error);
      throw new CreateProductError(error);
    }
  };
