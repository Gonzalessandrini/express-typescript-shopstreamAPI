import { OrderItem } from "application/entities/orders/Orders"

export type CreateOrderParamsRepository = {
    customer_id: string,
    items: OrderItem[]
}
