export class GetAllCategoriesError extends Error {
    private code: string;
    private details: any;
  
    constructor(details: any, ...args: any) {
      super(...args);
      this.code = '{GAC}';
      this.message = 'GetAllCategories error';
      this.details = details;
      Error.captureStackTrace(this, GetAllCategoriesError);
    }
  }
  