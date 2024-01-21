import { ProductModel } from './Schema';
import { CreateProductParamsRepository } from './Types';

export const CreateProductRepository = async (Department: CreateProductParamsRepository): Promise<ProductModel> => {
  return await ProductModel.create(Department);
};

export const GetAllProductsRepository = async (): Promise<any> => {
  return await ProductModel.find({})
}

export const GetSingleProductRepository = async (_id: string): Promise<ProductModel | null> => {
  return await ProductModel.findOne({ _id })
};
