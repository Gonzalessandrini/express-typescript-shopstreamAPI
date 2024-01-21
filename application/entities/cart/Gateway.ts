import { AddProductToCartResponse, AddProductsToCartParams, Cart, EmptyCartResponse, GenerateCartUniqueIdResponse, RemoveItemFromCartResponse, UpdateCartItemQuantityParams, UpdateCartItemQuantityResponse } from "./Cart";

export type GenerateCartUniqueId = () => Promise<GenerateCartUniqueIdResponse>;
export type AddProductToCart = (request: AddProductsToCartParams) => Promise<AddProductToCartResponse>;
export type GetProductsInCart = (cart_id: string) => Promise<Cart>;
export type UpdateItemQuantity = (details: UpdateCartItemQuantityParams) => Promise<Cart>
export type EmptyCart = (cart_id: string) => Promise<Cart>;
export type RemoveItemFromCart = (item_id: string) => Promise<Cart>;
