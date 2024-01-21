import { AddProductsToCartParams, UpdateCartItemQuantityParams } from "application/entities/cart/Cart";
import { AddProductToCartParamsRepository, UpdateItemQuantityParamsRepository } from "./Types";

export const parseAddProductToCartParams: (params: AddProductsToCartParams ) => AddProductToCartParamsRepository = (params) => {
    return {
        cart_id: params.cart_id,
        product_id: params.product_id,
        quantity: params.quantity
    };
  };


export const parseUpdateItemsQuantityParams: (params: UpdateCartItemQuantityParams ) => UpdateItemQuantityParamsRepository = (params) => {
   return {
        item_id: params.item_id,
        quantity: params.quantity
   };
  };  
  
//   export const parseCreateCategoryReponse: (params: CreateCategoryParamsRepository) => CreateCategoryResponse = (
//     params: CreateCategoryParamsRepository
//   ) => {
//     return {
//       name: params.name,
//       description: params.description,
//       departmentId: params.departmentId
//     };
//   };
  