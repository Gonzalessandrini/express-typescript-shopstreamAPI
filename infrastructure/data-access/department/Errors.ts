export class CreateDepartmentError extends Error {
    code: string;
    details: any | undefined;
  
    constructor(details?: any, ...args: any) {
      super(...args);
      this.code = 'CP001';
      this.message = 'CreateDeparment error';
      this.details = details;
      Error.captureStackTrace(this, CreateDepartmentError);
    }
  }
  
  export class GetDepartmentError extends Error {
    code: string;
    details: any | undefined;
  
    constructor(details?: any, ...args: any) {
      super(...args);
      this.code = 'GP001';
      this.message = 'GetDeparment error';
      this.details = details;
      Error.captureStackTrace(this, GetDepartmentError);
    }
  }

  export class GetAllDepartmentError extends Error {
    code: string;
    details: any | undefined;
  
    constructor(details?: any, ...args: any) {
      super(...args);
      this.code = 'GAD001';
      this.message = 'GetAllDeparment error';
      this.details = details;
      Error.captureStackTrace(this, GetAllDepartmentError);
    }
  }
  