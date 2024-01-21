export type AddProductToCartParamsRepository = {
    cart_id: string;
    product_id: string;
    quantity: number;
}

export type UpdateItemQuantityParamsRepository = {
    quantity: number;
}