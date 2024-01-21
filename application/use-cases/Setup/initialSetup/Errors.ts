export class InitialSetupError extends Error {
  private code: string;
  private details: any;

  constructor(details: any, ...args: any) {
    super(...args);
    this.code = '{IS}';
    this.message = 'Initial setup error';
    this.details = details;
    Error.captureStackTrace(this, InitialSetupError);
  }
}
