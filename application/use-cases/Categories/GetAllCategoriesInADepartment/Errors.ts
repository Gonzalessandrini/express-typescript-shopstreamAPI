export class GetAllCategoriesInADepartmentError extends Error {
    private code: string;
    private details: any;
  
    constructor(details: any, ...args: any) {
      super(...args);
      this.code = '{GAC}';
      this.message = 'GetAllCategoriesInADepartment error';
      this.details = details;
      Error.captureStackTrace(this, GetAllCategoriesInADepartmentError);
    }
  }
  