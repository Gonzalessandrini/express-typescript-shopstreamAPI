import { CreateProductsParams, CreateProductsResponse, Products } from './Products';

export type CreateProduct = (Products: CreateProductsParams) => Promise<CreateProductsResponse>;
export type GetSingleProduct = (id: string) => Promise<Products>;
export type GetAllProducts = () => Promise<any>