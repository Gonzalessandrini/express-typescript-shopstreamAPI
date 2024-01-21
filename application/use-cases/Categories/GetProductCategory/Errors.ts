export class GetProductCategoryError extends Error {
    private code: string;
    private details: any;
  
    constructor(details: any, ...args: any) {
      super(...args);
      this.code = '{GPC}';
      this.message = 'GetProductCategory error';
      this.details = details;
      Error.captureStackTrace(this, GetProductCategoryError);
    }
  }
  