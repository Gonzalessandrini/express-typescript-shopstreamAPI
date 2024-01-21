export class GetProductsInCartError extends Error {
    private code: string;
    private details: any;
  
    constructor(details: any, ...args: any) {
      super(...args);
      this.code = '{CC}';
      this.message = 'GetProductsInCart error';
      this.details = details;
      Error.captureStackTrace(this, GetProductsInCartError);
    }
  }
  