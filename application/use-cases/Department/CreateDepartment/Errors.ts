export class CreateDeparmentError extends Error {
    private code: string;
    private details: any;
  
    constructor(details: any, ...args: any) {
      super(...args);
      this.code = '{CD}';
      this.message = 'CreateDepartment error';
      this.details = details;
      Error.captureStackTrace(this, CreateDeparmentError);
    }
  }
  