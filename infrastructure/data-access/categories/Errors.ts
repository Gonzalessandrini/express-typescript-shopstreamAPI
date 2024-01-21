export class CreateCategoryError extends Error {
    code: string;
    details: any | undefined;
  
  constructor(details?: any, ...args: any) {
      super(...args);
      this.code = 'CC001';
      this.message = 'CreateCategory error';
      this.details = details;
      Error.captureStackTrace(this, CreateCategoryError);
    }
}
  
export class GetSingleCategoryError extends Error {
  code: string;
  details: any | undefined;

  constructor(details?: any, ...args: any) {
    super(...args);
    this.code = 'GC002';
    this.message = 'GetSingleCategory error';
    this.details = details;
    Error.captureStackTrace(this, GetSingleCategoryError);
  }
}

  export class GetAllCategoriesError extends Error {
    code: string;
    details: any | undefined;
  
    constructor(details?: any, ...args: any) {
      super(...args);
      this.code = 'GAC003';
      this.message = 'GetAllCategories error';
      this.details = details;
      Error.captureStackTrace(this, GetAllCategoriesError);
    }
  }

  export class GetAllCategoriesInADepartmentError extends Error {
    code: string;
    details: any | undefined;
  
    constructor(details?: any, ...args: any) {
      super(...args);
      this.code = 'GACIAD004';
      this.message = 'GetAllCategoriesInADepartment error';
      this.details = details;
      Error.captureStackTrace(this, GetAllCategoriesInADepartmentError);
    }
  }

  export class GetProductCategoryError extends Error {
    code: string;
    details: any | undefined;
  
    constructor(details?: any, ...args: any) {
      super(...args);
      this.code = 'GACIAD005';
      this.message = 'GetProductCategory error';
      this.details = details;
      Error.captureStackTrace(this, GetProductCategoryError);
    }
  }