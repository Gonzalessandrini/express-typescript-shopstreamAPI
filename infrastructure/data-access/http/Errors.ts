export class UnknownError extends Error {
  code: string;
  details: any | undefined;

  constructor(details?: any, ...args: any) {
    super(...args);
    this.code = 'U001';
    this.message = 'Unknown error';
    this.details = details;
    Error.captureStackTrace(this, UnknownError);
  }
}

export class InvalidParamsError extends Error {
  code: string;
  details: any | undefined;

  constructor(details?: any, ...args: any) {
    super(...args);
    this.code = 'IP001';
    this.message = 'InvalidParams error';
    this.details = details;
    Error.captureStackTrace(this, UnknownError);
  }
}

export class UnauthorizedError extends Error {
  code: string;
  details: any | undefined;

  constructor(details?: any, ...args: any) {
    super(...args);
    this.code = 'U001';
    this.message = 'Unauthorized error';
    this.details = details;
    Error.captureStackTrace(this, UnauthorizedError);
  }
}
