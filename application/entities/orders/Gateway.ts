import { CreateOrdersParams, Orders } from './Orders';

export type CreateOrder = (order: CreateOrdersParams) => Promise<any>;
export type GetSingleOrder = (id: string) => Promise<Orders>;