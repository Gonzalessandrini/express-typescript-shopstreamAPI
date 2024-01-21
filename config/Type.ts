import { BaseLoggerFactory } from '../logger/Logger';

export type Config = {
  http: {
    port: number;
    mocked: boolean;
  };
  baseLogger: BaseLoggerFactory;
  mongoose: {
    uri: string;
  };
  jwt: {
    secret: string;
  };
};
