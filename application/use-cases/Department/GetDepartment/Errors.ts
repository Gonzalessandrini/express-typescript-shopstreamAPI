export class GetDepartmentError extends Error {
    private code: string;
    private details: any;
  
    constructor(details: any, ...args: any) {
      super(...args);
      this.code = '{GD}';
      this.message = 'GetDepartment error';
      this.details = details;
      Error.captureStackTrace(this, GetDepartmentError);
    }
  }
  