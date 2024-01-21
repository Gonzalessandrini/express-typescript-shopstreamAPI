
import { AddProductToCart, EmptyCart, GenerateCartUniqueId, GetProductsInCart, RemoveItemFromCart, UpdateItemQuantity } from '../../../application/entities/cart/Gateway';
import { BaseLogger } from '../../../logger/Logger';
import { v4 as uuidv4 } from 'uuid';
import { GenerateCartUniqueIdError, GetProductsInCartError, addProductToCartError, updateItemQuantityError } from './Errors';
import { EmptyShoppingCartRepository, GetCartRepository, RemoveItemFromCartRepository, addProductToCartRepository, generateCartUniqueIdRepository, updateItemQuantityRepository } from './Repository';
import { Cart, GenerateCartUniqueIdResponse } from 'application/entities/cart/Cart';
import { parseAddProductToCartParams, parseUpdateItemsQuantityParams } from './Parser';
import { GetSingleProductRepository } from '../products/Repository';

export type cartDependencies = {
  logger: BaseLogger;
};

export const generateCartUniqueId: (dependencies: cartDependencies) => GenerateCartUniqueId =
  (dependencies) =>
  async (): Promise<GenerateCartUniqueIdResponse> => {
    try {
      const uniqueId: string = uuidv4();

      const cartSaved = await generateCartUniqueIdRepository(uniqueId);

      return cartSaved
    } catch (error) {
      dependencies.logger.error('Error. Details:', error);
      throw new GenerateCartUniqueIdError(error);
    }
  };

  export const addProductToCart: (dependencies: cartDependencies) => AddProductToCart =
  (dependencies) =>
  async (params): Promise<any> => {
    try {
      
      const paramsParsed = parseAddProductToCartParams({
        ...params
      });

      const uniqueId: string = uuidv4();

      const categorySaved = await addProductToCartRepository(paramsParsed.cart_id,uniqueId, paramsParsed);

      return categorySaved
    } catch (error) {
      dependencies.logger.error('Error. Details:', error);
      throw new addProductToCartError(error);
    }
  };

export const getProductsInCart: (dependencies: cartDependencies) => GetProductsInCart =
  (dependencies) =>
  async (cart_id): Promise<any> => {
    try {
      const localShoppingCart = await GetCartRepository(cart_id)
      if (!localShoppingCart) throw 'shoppingCart not found';

      console.log('localShoppingCart: ', localShoppingCart)

      const productsInCart = localShoppingCart.items

      return productsInCart
    } catch (error) {
      dependencies.logger.error('Error. Details:', error);
      throw new GetProductsInCartError(error);
    }
};

export const updateItemQuantity: (dependencies: cartDependencies) => UpdateItemQuantity =
  (dependencies) =>
  async (params): Promise<any> => {
    try {
      const paramsParsed = parseUpdateItemsQuantityParams({
        ...params
      });

      const updatedItem = await updateItemQuantityRepository(params.item_id, paramsParsed.quantity);

      return updatedItem

    } catch (error) {
      dependencies.logger.error('Error. Details:', error);
      throw new updateItemQuantityError(error);
    }
};

export const emptyShoppingCart: (dependencies: cartDependencies) => EmptyCart =
  (dependencies) =>
  async (cart_id): Promise<any> => {
    try {
      const localEmptyShoppingCart = await EmptyShoppingCartRepository(cart_id)
      if (!localEmptyShoppingCart) throw 'shoppingCart not found';

      return localEmptyShoppingCart
    } catch (error) {
      dependencies.logger.error('Error. Details:', error);
      throw new GetProductsInCartError(error);
    }
};

export const removeItemFromCart: (dependencies: cartDependencies) => RemoveItemFromCart =
  (dependencies) =>
  async (item_id): Promise<any> => {
    try {
      const removedItem = await RemoveItemFromCartRepository(item_id);

      return removedItem
    } catch (error) {
      dependencies.logger.error('Error. Details:', error);
      throw new updateItemQuantityError(error);
    }
};