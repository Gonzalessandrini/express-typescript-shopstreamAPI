import { RequestHandler } from 'express-serve-static-core';

import { attachmentParser } from './AttachmentsParser';
import { bodyParser } from './BodyParser';
import { identificatorParser } from './IdentificatorParser';
import { parameterParser } from './ParameterParser';

export const middlewares = (): Array<RequestHandler> => [
  attachmentParser,
  parameterParser,
  bodyParser,
  identificatorParser
];
