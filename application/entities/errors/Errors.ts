export class InvalidParameterError extends Error {
  private code: string;
  private details: any;

  constructor(details: any, ...args: any) {
    super(...args);
    this.code = '[IP001]';
    this.message = 'InvalidParameterError';
    this.details = details;
    Error.captureStackTrace(this, InvalidParameterError);
  }
}
