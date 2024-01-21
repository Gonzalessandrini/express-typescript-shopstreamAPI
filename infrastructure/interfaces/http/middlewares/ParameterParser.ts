import { NextFunction, Request, Response } from 'express-serve-static-core';

export const parameterParser = async (req: Request, res: Response, next: NextFunction) => {
  if (req.query.sorted) {
    try {
      req.query.sorted = JSON.parse(req.query.sorted as string);
      next();
    } catch (error) {
      res.status(400).json({ message: '[ParameterParser] Failed to parse sorted query param' });
    }
  } else {
    next();
  }
};
