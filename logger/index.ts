import { logger } from './Logger';

export default (dependencies: string) => ({
  baseLogger: logger(dependencies)
});
