import { BaseLoggerFactory } from '../../../logger/Logger';
import { addProductToCart, emptyShoppingCart, generateCartUniqueId, getProductsInCart, removeItemFromCart, updateItemQuantity } from './Service';

export default (loggerFactory: BaseLoggerFactory) => ({
    generateCartUniqueId: generateCartUniqueId({ logger: loggerFactory('GenerateCartUniqueIdDA') }),
    addProductToShoppingCart: addProductToCart({ logger: loggerFactory('AddProductToCartDA') }),
    getProductsInCart: getProductsInCart({ logger: loggerFactory('GetProductsInCartDA') }),
    updateItemQuantity: updateItemQuantity({ logger: loggerFactory('UpdateItemQuantityDA') }),
    emptyCart: emptyShoppingCart({ logger: loggerFactory('EmptyShoppingCartDA') }),
    removeItemFromCart: removeItemFromCart({ logger: loggerFactory('RemoveItemFromCartDA') })
});
