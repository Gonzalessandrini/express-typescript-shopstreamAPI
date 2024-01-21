export class UpdateItemQuantityError extends Error {
    private code: string;
    private details: any;
  
    constructor(details: any, ...args: any) {
      super(...args);
      this.code = '{UC}';
      this.message = 'UPDATE ITEM QUANTITY error';
      this.details = details;
      Error.captureStackTrace(this, UpdateItemQuantityError);
    }
  }
  