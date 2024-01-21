export class GetAllDepartmentError extends Error {
    private code: string;
    private details: any;
  
    constructor(details: any, ...args: any) {
      super(...args);
      this.code = '{GAD}';
      this.message = 'GetAllDepartment error';
      this.details = details;
      Error.captureStackTrace(this, GetAllDepartmentError);
    }
  }
  