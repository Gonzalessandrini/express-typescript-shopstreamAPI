export class CreateAnOrderError extends Error {
    private code: string;
    private details: any;
  
    constructor(details: any, ...args: any) {
      super(...args);
      this.code = '{CP}';
      this.message = 'CreateAnOrder error';
      this.details = details;
      Error.captureStackTrace(this, CreateAnOrderError);
    }
  }
  