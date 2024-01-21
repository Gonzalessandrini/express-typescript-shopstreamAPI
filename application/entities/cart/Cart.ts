export type Cart = {
    cart_id: string;
    items: CartItem[];
};

export interface CartItem {
    item_id: string;
    product_id: string;
    quantity: number;
}

export type AddProductsToCartParams = {
    cart_id: string;
    product_id: string;
    quantity: number;
};

export type GenerateCartUniqueIdResponse  = {
    cart_id: string;
};

export type AddProductToCartResponse = {
    item_id : string,
    cart_id : string,
    product_id : string,
    quantity : number,
};

export type UpdateCartItemQuantityParams = {
    item_id: string,
    quantity: number
};

export type UpdateCartItemQuantityResponse = {
    item_id : number,
    cart_id : string,
    attributes : string,
    product_id : string,
    quantity : number
};

export type EmptyCartResponse = [];

export type RemoveItemFromCartResponse = {
    message: string;
};

