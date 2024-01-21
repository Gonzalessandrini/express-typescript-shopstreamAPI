export class AddProductToCartError extends Error {
    private code: string;
    private details: any;
  
    constructor(details: any, ...args: any) {
      super(...args);
      this.code = '{CC}';
      this.message = 'AddProductToCart error';
      this.details = details;
      Error.captureStackTrace(this, AddProductToCartError);
    }
  }
  