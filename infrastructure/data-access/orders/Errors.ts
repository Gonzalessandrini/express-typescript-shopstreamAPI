export class CreateAnOrderError extends Error {
    code: string;
    details: any | undefined;
  
    constructor(details?: any, ...args: any) {
      super(...args);
      this.code = 'CP001';
      this.message = 'CreateOrder error';
      this.details = details;
      Error.captureStackTrace(this, CreateAnOrderError);
    }
  }

  export class GetSingleOrderError extends Error {
    code: string;
    details: any | undefined;
  
    constructor(details?: any, ...args: any) {
      super(...args);
      this.code = 'GAP002';
      this.message = 'GetSingleOrder error';
      this.details = details;
      Error.captureStackTrace(this, GetSingleOrderError);
    }
  }
