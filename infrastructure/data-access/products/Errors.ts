export class CreateProductError extends Error {
    code: string;
    details: any | undefined;
  
    constructor(details?: any, ...args: any) {
      super(...args);
      this.code = 'CP001';
      this.message = 'CreateProduct error';
      this.details = details;
      Error.captureStackTrace(this, CreateProductError);
    }
  }

  export class GetAllProductsError extends Error {
    code: string;
    details: any | undefined;
  
    constructor(details?: any, ...args: any) {
      super(...args);
      this.code = 'GAP002';
      this.message = 'GetAllProducts error';
      this.details = details;
      Error.captureStackTrace(this, GetAllProductsError);
    }
  }
  
  export class GetSingleProductError extends Error {
    code: string;
    details: any | undefined;
  
    constructor(details?: any, ...args: any) {
      super(...args);
      this.code = 'GAP003';
      this.message = 'GetSingleProduct error';
      this.details = details;
      Error.captureStackTrace(this, GetSingleProductError);
    }
  }
