import { CreateOrdersParams, CreateOrdersResponse, Orders } from "application/entities/orders/Orders";
import { CreateOrderParamsRepository } from "./Types";
import { OrderModel } from "./Schema";

export const parseCreateOrderParams: (params: CreateOrdersParams ) => CreateOrderParamsRepository = (params) => {
    return {
        customer_id: params.customer_id,
        items: params.items
    };
}

export const parseGetOrder: (params: OrderModel) => Orders = (params: OrderModel) => {
    return {
        customer_id: params.customer_id,
        items: params.items,
        status: params.status
    };
  };