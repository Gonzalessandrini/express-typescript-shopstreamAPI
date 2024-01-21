import { NextFunction, Request, Response } from 'express-serve-static-core';

export const bodyParser = async (req: Request, res: Response, next: NextFunction) => {
  if (req.body) req.body = keysToCamel(req.body);
  next();
};

const keysToCamel = function (o: any) {
  if (isObject(o)) {
    const n: any = {};

    Object.keys(o).forEach((k: string) => {
      n[toCamel(k)] = keysToCamel(o[k]);
    });

    return n;
  } else if (isArray(o)) {
    return o.map((i: any) => {
      return keysToCamel(i);
    });
  }

  return o;
};

const isObject = function (o: object) {
  return o === Object(o) && !isArray(o) && typeof o !== 'function';
};

const isArray = function (a: any) {
  return Array.isArray(a);
};

const toCamel = (s: string) => {
  return s.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace('-', '').replace('_', '');
  });
};
