export class LoginCustomerError extends Error {
    private code: string;
    private details: any;
  
    constructor(details: any, ...args: any) {
      super(...args);
      this.code = '{LC}';
      this.message = 'LOGIN CUSTOMER error';
      this.details = details;
      Error.captureStackTrace(this, LoginCustomerError);
    }
  }
  