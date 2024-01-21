import * as dotenv from 'dotenv';
import dotEnvExpand from 'dotenv-expand';
import path from 'path';

import { logger } from '../logger/Logger';
import { configSchema } from './Schema';
import { Config } from './Type';

const scope = process.env['SCOPE'] || '';
const envFilePath = path.resolve(process.cwd(), `${scope}.env`);
dotEnvExpand.expand(dotenv.config({ path: envFilePath }));

export function initConfig() {
  const config = {
    http: {
      port: process.env['HTTP_PORT'],
      mocked: process.env['HTTP_MOCKED']?.toLowerCase() === 'true'
    },
    baseLogger: logger(process.env['LOG_LEVEL']!),
    mongoose: {
      uri: process.env['MONGO_URI']
    },
    jwt: {
      secret: process.env['JWT_SECRET'] 
    }
  };

  const { error, value } = configSchema.validate(config);

  if (error) {
    logger('error')('Config').error('Config parse failed', error);
    throw new Error('Config parse failed');
  }
  const configValidated: Config = value;
  return configValidated;
}
