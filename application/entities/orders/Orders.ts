export type ProductObject = {
  _id: string;
  name: string;
  price: string;
  thumbnail: string;
}

export type OrderItem = {
    product_id: ProductObject; // Identificador del producto,
    quantity: number;
  };
  
  export type Orders = {            // Identificador único de la orden
    customer_id: string;          // Identificador del cliente
    items: OrderItem[];          // Lista de items en la orden
    status: string;              // Estado de la orden (por ejemplo, 'pending', 'completed')
  };
  
  export type CreateOrdersParams = {
    customer_id: string;     // Identificador del cliente
    items: OrderItem[];     // Lista de items para crear la orden
    // Aquí podrías añadir más campos si es necesario, como dirección de envío, etc.
  };
  
  export type CreateOrdersResponse = {
    success: boolean;        // Indica si la creación fue exitosa
    order?: Orders;          // La orden creada, opcional dependiendo del éxito
    message?: string;        // Mensaje de error o éxito
  };