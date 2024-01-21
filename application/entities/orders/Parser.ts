import { validateOrThrow } from '../common/Helpers';
import { OrderItem } from './Orders';
import { createOrdersSchema } from './Schema';

type CreateOrdersInput = {
    customer_id: unknown;
    items: unknown
};

export type CreateOrdersValidatedInput = {
    customer_id: string;
    items: OrderItem[];
  };

  export const validateAndParseCreateOrders = (params: CreateOrdersInput): CreateOrdersValidatedInput => {
    validateOrThrow(params, createOrdersSchema);
  
    const items = (params.items as any[]).map((item: any) => ({
      product_id: item.productId,
      quantity: item.quantity as number
    })) as OrderItem[];
  
    return {
      customer_id: params.customer_id as string,
      items: items
    };
  };