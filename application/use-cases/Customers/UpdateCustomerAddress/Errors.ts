export class UpdateCustomerAddressError extends Error {
    private code: string;
    private details: any;
  
    constructor(details: any, ...args: any) {
      super(...args);
      this.code = '{UC}';
      this.message = 'UPDATE CUSTOMER ADDRESS error';
      this.details = details;
      Error.captureStackTrace(this, UpdateCustomerAddressError);
    }
  }
  