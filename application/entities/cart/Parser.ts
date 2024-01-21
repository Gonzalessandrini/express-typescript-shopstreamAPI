import { validateOrThrow } from '../common/Helpers';
import { addProductToCartSchema, updateItemQuantitySchema } from './Schema';

type AddProductToCartInput = {
  cartId: unknown;
  productId: unknown;
  quantity: unknown;
};

export type AddProductToCartValidatedInput = {
  cartId: string;
  productId: string;
  quantity: number;
};

export const validateAndParseAddProductToCart = (params: AddProductToCartInput): AddProductToCartValidatedInput => {
  validateOrThrow(params, addProductToCartSchema);
  return {
    cartId: params.cartId as string,
    productId: params.productId as string,
    quantity: params.quantity as number,
  };
};

type UpdateItemQuantityInput = {
  quantity: unknown;
  item_id: unknown;
};

export type UpdateItemQuantityValidatedInput = {
  quantity: number;
  item_id: string;
};

export const validateAndParseUpdateItemQuantity = (params: UpdateItemQuantityInput): UpdateItemQuantityValidatedInput => {
  validateOrThrow(params, updateItemQuantitySchema);
  return {
    item_id: params.item_id as string,
    quantity: params.quantity as number,
  };
};