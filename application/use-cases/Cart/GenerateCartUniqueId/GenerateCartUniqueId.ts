import { BaseLogger } from 'logger/Logger';
import { GenerateCartUniqueIdError } from './Errors';
import { GenerateCartUniqueId } from 'application/entities/cart/Gateway';

export type GenerateCartUniqueIdDependencies = {
  logger: BaseLogger;
  generateCartUniqueId: GenerateCartUniqueId;
};

export const generateCartUniqueId =
  ({ logger, generateCartUniqueId }: GenerateCartUniqueIdDependencies) =>
  async (): Promise<any> => {
    try {
      return await generateCartUniqueId();
    } catch (error) {
      logger.error('Error. Details: ', error);
      throw new GenerateCartUniqueIdError(error);
    }
  };