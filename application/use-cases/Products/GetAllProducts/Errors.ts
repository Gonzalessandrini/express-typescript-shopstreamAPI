export class GetAllProductsError extends Error {
    private code: string;
    private details: any;
  
    constructor(details: any, ...args: any) {
      super(...args);
      this.code = '{GAP}';
      this.message = 'GetAllProducts error';
      this.details = details;
      Error.captureStackTrace(this, GetAllProductsError);
    }
  }
  