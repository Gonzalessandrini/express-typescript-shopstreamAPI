export type Products = {
    name: string;
    description: string;
    price: number;
    discounted_price: string;
    thumbnail: string;
    categoryId: string;
  };
  
  export type CreateProductsResponse = Products
  
  export type CreateProductsParams = Products
  