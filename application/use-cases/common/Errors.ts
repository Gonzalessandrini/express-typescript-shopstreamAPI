export class InvalidParamsError extends Error {
  private code: string;
  private details: any;

  constructor(details: any, ...args: any) {
    super(...args);
    this.code = '{IP001}';
    this.message = 'InvalidParamsError';
    this.details = details;
    Error.captureStackTrace(this, InvalidParamsError);
  }
}

export class ForbiddenError extends Error {
  private code: string;
  private details: any;

  constructor(details: any, ...args: any) {
    super(...args);
    this.code = '{F001}';
    this.message = 'ForbiddenError';
    this.details = details;
    Error.captureStackTrace(this, ForbiddenError);
  }
}

export class UserAlreadyExistsError extends Error {
  private code: string;
  private details: any;

  constructor(details: any, ...args: any) {
    super(...args);
    this.code = '{UAE}';
    this.message = 'UserAlreadyExistsError';
    this.details = details;
    Error.captureStackTrace(this, UserAlreadyExistsError);
  }
}

export class WrongBodyRequestError extends Error {
  private code: string;
  private details: any;

  constructor(details: any, ...args: any) {
    super(...args);
    this.code = '{WBR001}';
    this.message = 'WrongBodyRequestError';
    this.details = details;
    Error.captureStackTrace(this, WrongBodyRequestError);
  }
}

export class UserNotFoundError extends Error {
  private code: string;
  private details: any;

  constructor(details: any, ...args: any) {
    super(...args);
    this.code = '{UNF001}';
    this.message = 'UserNotFoundError';
    this.details = details;
    Error.captureStackTrace(this, UserNotFoundError);
  }
}

export class UnauthorizedUserError extends Error {
  private code: string;
  private details: any;

  constructor(details: any, ...args: any) {
    super(...args);
    this.code = '{UU001}';
    this.message = 'UnauthorizedUserError';
    this.details = details;
    Error.captureStackTrace(this, UnauthorizedUserError);
  }
}

export class WrongParametersError extends Error {
  private code: string;
  private details: any;

  constructor(details: any, ...args: any) {
    super(...args);
    this.code = '{WP001}';
    this.message = 'WrongParametersError';
    this.details = details;
    Error.captureStackTrace(this, WrongParametersError);
  }
}

export class TargetUserNotFoundError extends Error {
  private code: string;
  private details: any;

  constructor(details: any, ...args: any) {
    super(...args);
    this.code = '{TUNF001}';
    this.message = 'TargetUserNotFoundError';
    this.details = details;
    Error.captureStackTrace(this, TargetUserNotFoundError);
  }
}

export class RequireOtpError extends Error {
  private code: string;
  private details: any;

  constructor(details: any, ...args: any) {
    super(...args);
    this.code = '{ROTP001}';
    this.message = 'RequireOtpError';
    this.details = details;
    Error.captureStackTrace(this, RequireOtpError);
  }
}

export class InvalidFileError extends Error {
  private code: string;
  private details: any;

  constructor(details: any, ...args: any) {
    super(...args);
    this.code = '{IF001}';
    this.message = 'InvalidFileError';
    this.details = details;
    Error.captureStackTrace(this, InvalidFileError);
  }
}

export class NotExistingIdError extends Error {
  private code: string;
  private details: any;

  constructor(details: any, ...args: any) {
    super(...args);
    this.code = '{NEI001}';
    this.message = 'NotExistingIdError';
    this.details = details;
    Error.captureStackTrace(this, NotExistingIdError);
  }
}

export class ConflictError extends Error {
  private code: string;
  private details: any;

  constructor(details: any, ...args: any) {
    super(...args);
    this.code = '{C001}';
    this.message = 'ConflictError';
    this.details = details;
    Error.captureStackTrace(this, ConflictError);
  }
}

export class NotFoundError extends Error {
  private code: string;
  private details: any;

  constructor(details: any, ...args: any) {
    super(...args);
    this.code = '{NF001}';
    this.message = 'NotFoundError';
    this.details = details;
    Error.captureStackTrace(this, NotFoundError);
  }
}
