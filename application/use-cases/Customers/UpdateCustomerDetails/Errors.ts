export class UpdateCustomerDetailsError extends Error {
    private code: string;
    private details: any;
  
    constructor(details: any, ...args: any) {
      super(...args);
      this.code = '{UC}';
      this.message = 'UPDATE CUSTOMER DETAILS error';
      this.details = details;
      Error.captureStackTrace(this, UpdateCustomerDetailsError);
    }
  }
  