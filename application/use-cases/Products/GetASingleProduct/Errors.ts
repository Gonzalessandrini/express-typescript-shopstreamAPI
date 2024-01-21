export class GetSingleProductError extends Error {
    private code: string;
    private details: any;
  
    constructor(details: any, ...args: any) {
      super(...args);
      this.code = '{GSC}';
      this.message = 'GetSingleProduct error';
      this.details = details;
      Error.captureStackTrace(this, GetSingleProductError);
    }
  }
  