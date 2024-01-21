import { validateOrThrow } from '../common/Helpers';
import { createProductSchema } from './Schema';

type CreateProductInput = {
  name: unknown;
  description: unknown;
  price: unknown;
  discounted_price: unknown;
  thumbnail: unknown;
  categoryId: unknown;
};

export type CreateProductValidatedInput = {
  name: string;
  description: string;
  price: number;
  discounted_price: string;
  thumbnail: string;
  categoryId: string;
};

export const validateAndParseCreateProduct = (params: CreateProductInput): CreateProductValidatedInput => {
  validateOrThrow(params, createProductSchema);
  return {
    name: params.name as string,
    description: params.description as string,
    price: params.price as number,
    discounted_price: params.discounted_price as string,
    thumbnail: params.thumbnail as string,
    categoryId: params.categoryId as string
  };
};
