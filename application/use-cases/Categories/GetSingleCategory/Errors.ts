export class GetSingleCategoryError extends Error {
    private code: string;
    private details: any;
  
    constructor(details: any, ...args: any) {
      super(...args);
      this.code = '{GSC}';
      this.message = 'GetSingleCategory error';
      this.details = details;
      Error.captureStackTrace(this, GetSingleCategoryError);
    }
  }
  