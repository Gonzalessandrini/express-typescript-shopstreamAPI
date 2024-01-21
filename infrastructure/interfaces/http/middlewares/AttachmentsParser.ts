import { NextFunction, Request, RequestHandler, Response } from 'express-serve-static-core';
import multer from 'multer';

const upload: RequestHandler = multer({ limits: { fileSize: 10000000 } }).any();

export const attachmentParser = async (req: Request, res: Response, next: NextFunction) => {
  if (req.route.extraConfig.multipart) {
    upload(req, res, next);
  } else {
    next();
  }
};
