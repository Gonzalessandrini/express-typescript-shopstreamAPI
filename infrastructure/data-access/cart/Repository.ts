import { EmptyCartResponse, GenerateCartUniqueIdResponse, UpdateCartItemQuantityResponse } from 'application/entities/cart/Cart';
import { ShoppingCartModel } from './Schema';
import { AddProductToCartParamsRepository, UpdateItemQuantityParamsRepository } from './Types';

export const generateCartUniqueIdRepository = async (id: string): Promise<GenerateCartUniqueIdResponse> => {
  return await ShoppingCartModel.create({ cart_id: id })
}

export const addProductToCartRepository = async (cartId: string, itemId: string, Product:AddProductToCartParamsRepository): Promise<ShoppingCartModel | null> => {
  return await ShoppingCartModel.findOneAndUpdate(
    { cart_id: cartId },
    {
      $push: {
        items: {
          item_id: itemId,
          ...Product
        },
        },
    },
    { new: true }
  )
}

export const GetCartRepository = async (_id: string): Promise<ShoppingCartModel | null> => {
  return await ShoppingCartModel.findOne({ _id }).populate('items.product_id')
};

export const updateItemQuantityRepository = async (item_id: string, quantity: number ): Promise<UpdateCartItemQuantityResponse | null> => {
  return await ShoppingCartModel.findOneAndUpdate(
    { 'items.item_id': item_id },
    { $set: { 'items.$.quantity': quantity } },
    { new: true }
  );
};

export const EmptyShoppingCartRepository = async (_id: string): Promise<ShoppingCartModel | null> => {
  return await ShoppingCartModel.findOneAndUpdate(
  { _id: _id },
  { $set: { items: [] } },
  { new: true }
)
};

export const RemoveItemFromCartRepository = async (item_id: string): Promise<EmptyCartResponse | null> => {
  return await ShoppingCartModel.findOneAndUpdate(
    { 'items.item_id': item_id },
    { $pull: { items: { item_id: item_id } } },
    { new: true }
  )
}