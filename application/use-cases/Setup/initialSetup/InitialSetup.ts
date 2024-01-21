import { BaseLogger } from '../../../../logger/Logger';
import { delay } from '../../common/Helpers';
import { InitialSetupError } from './Errors';

export type InitialSetupDependencies = {
  logger: BaseLogger;
};

export type InitConfig = {};

export const initialSetup =
  ({ logger }: InitialSetupDependencies) =>
  async (): Promise<InitConfig> => {
    try {
      logger.info('Initializing');

      // Timer to ensure we already have DB connection established
      await delay(3000);
      logger.info('Done');
      return {};
    } catch (error) {
      logger.error('Error. Details: ', error);
      throw new InitialSetupError(error);
    }
  };
