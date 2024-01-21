import cors from 'cors';
import express from 'express';
import { NextFunction, Request, RequestHandler, Response } from 'express-serve-static-core';
import stream from 'stream';

import { BaseLogger, BaseLoggerFactory } from '../../../../logger/Logger';
import { ResponseMapper } from '../presenters/Results';
import { Route } from '../routes';

const expressApp = express();
expressApp.use(cors());
expressApp.set('trust proxy', true); //avoid nginx proxy ip and get actual client ip in req.op
expressApp.use(express.json());
expressApp.use(express.urlencoded({ extended: false }));

const addRouteConfig =
  (route: any) =>
  (req: Request, res: Response, next: NextFunction): void => {
    req.route.extraConfig = route;
    next();
  };

function extractParams(req: Request) {
  return Object.assign(
    { identificatorObject: req.headers },
    req.body,
    req.query,
    req.params,
    { file: req.file },
    { files: req.files }
  );
}

const errorHandler =
  (mapper: ResponseMapper, logger: BaseLogger) => async (error: any, req: Request, res: Response, next: any) => {
    const { status, data } = mapper(error);
    logger.error(`Error in endpoint ${req.method} ${req.originalUrl} : ${status}`);
    res.status(status).json(data);
  };

const responseHandler = (mapper: ResponseMapper, logger: BaseLogger, route: Route) => async (req: any, res: any) => {
  const { status, data } = mapper(req.results);
  if (route.fileBuffer) {
    try {
      const readStream = new stream.PassThrough();
      readStream.end(data.buffer);
      res.set('Content-disposition', 'attachment; filename=' + data.filename);
      res.set('Content-Type', 'application/octet-stream');
      readStream.pipe(res);
    } catch (error) {
      logger.error('Failed to stream private file with error:', error);
    }
  } else {
    logger.info('', { path: route.path, status });
    res.status(status).json(data);
  }
};

const endpoint = (uoc: any) => async (req: any, res: any, next: any) => {
  try {
    req.results = await uoc(extractParams(req));
    next();
  } catch (error) {
    next(error);
  }
};

export const server = (
  routes: Array<Route> = [],
  responseMapper: (code?: number) => ResponseMapper,
  errorMapper: ResponseMapper,
  port: number,
  middlewares: Array<RequestHandler> = [],
  baseLogger: BaseLoggerFactory
) => {
  const logger = baseLogger('Express');
  routes.forEach((route: Route) => {
    const path = route.path;
    const handlers = [
      addRouteConfig(route),
      ...middlewares,
      endpoint(route.useCase),
      errorHandler(errorMapper, baseLogger('ErrorHandler')),
      responseHandler(responseMapper(route.successCode), baseLogger('ResponseHandler'), route)
    ];
    switch (route.verb.toLowerCase()) {
      case 'get':
        expressApp.get(path, handlers);
        break;
      case 'post':
        expressApp.post(path, handlers);
        break;
      case 'put':
        expressApp.put(path, handlers);
        break;
      case 'delete':
        expressApp.delete(path, handlers);
        break;
      case 'patch':
        expressApp.patch(path, handlers);
        break;
    }
  });
  expressApp.get('/status', [(req: any, res: any) => res.send('ok')]);

  const server = expressApp.listen(port);
  logger.info('Server running', { port });
  return server;
};
