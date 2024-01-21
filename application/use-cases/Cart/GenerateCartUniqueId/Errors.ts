export class GenerateCartUniqueIdError extends Error {
    private code: string;
    private details: any;
  
    constructor(details: any, ...args: any) {
      super(...args);
      this.code = '{GCE}';
      this.message = 'GenerateCartUniqueId error';
      this.details = details;
      Error.captureStackTrace(this, GenerateCartUniqueIdError);
    }
  }
  