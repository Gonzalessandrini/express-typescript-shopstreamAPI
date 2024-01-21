export class CreateCustomerError extends Error {
    code: string;
    details: any | undefined;
  
  constructor(details?: any, ...args: any) {
      super(...args);
      this.code = 'CC001';
      this.message = 'CreateCustomer error';
      this.details = details;
      Error.captureStackTrace(this, CreateCustomerError);
    }
}
  
export class GetSingleCustomerError extends Error {
  code: string;
  details: any | undefined;

  constructor(details?: any, ...args: any) {
    super(...args);
    this.code = 'GC002';
    this.message = 'GetSingleCustomer error';
    this.details = details;
    Error.captureStackTrace(this, GetSingleCustomerError);
  }
}

export class LoginCustomerError extends Error {
  code: string;
  details: any | undefined;

  constructor(details?: any, ...args: any) {
    super(...args);
    this.code = 'GC003';
    this.message = 'LoginCustomer error';
    this.details = details;
    Error.captureStackTrace(this, LoginCustomerError);
  }
}
