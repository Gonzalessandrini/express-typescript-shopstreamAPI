import { BaseLoggerFactory } from '../../../logger/Logger';
import { server } from './express';
import { middlewares } from './middlewares';
import { presentError } from './presenters/Errors';
import { presentResponse } from './presenters/Results';
import { routes } from './routes';

export const http = (uoc: any, port: number, baseLogger: BaseLoggerFactory) =>
  server(routes(uoc), presentResponse, presentError, port, middlewares(), baseLogger);
