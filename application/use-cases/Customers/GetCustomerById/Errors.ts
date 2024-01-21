export class GetCustomerByIdError extends Error {
    private code: string;
    private details: any;
  
    constructor(details: any, ...args: any) {
      super(...args);
      this.code = '{GC}';
      this.message = 'GetCustomerById error';
      this.details = details;
      Error.captureStackTrace(this, GetCustomerByIdError);
    }
  }
  