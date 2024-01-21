export class GenerateCartUniqueIdError extends Error {
    code: string;
    details: any | undefined;
  
  constructor(details?: any, ...args: any) {
      super(...args);
      this.code = 'CC001';
      this.message = 'GenerateCartUniqueId error';
      this.details = details;
      Error.captureStackTrace(this, GenerateCartUniqueIdError);
    }
}

export class addProductToCartError extends Error {
  code: string;
  details: any | undefined;

constructor(details?: any, ...args: any) {
    super(...args);
    this.code = 'CC002';
    this.message = 'addProductToCart error';
    this.details = details;
    Error.captureStackTrace(this, addProductToCartError);
  }
}

export class GetProductsInCartError extends Error {
  code: string;
  details: any | undefined;

constructor(details?: any, ...args: any) {
    super(...args);
    this.code = 'CC003';
    this.message = 'getProductsInCart error';
    this.details = details;
    Error.captureStackTrace(this, GetProductsInCartError);
  }
}

export class updateItemQuantityError extends Error {
  code: string;
  details: any | undefined;

constructor(details?: any, ...args: any) {
    super(...args);
    this.code = 'CC004';
    this.message = 'updateItemQuantity error';
    this.details = details;
    Error.captureStackTrace(this, updateItemQuantityError);
  }
}
