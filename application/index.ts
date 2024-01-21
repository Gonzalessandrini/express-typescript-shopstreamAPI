import { BaseLoggerFactory } from '../logger/Logger';
import { useCaseFactory } from './use-cases';

export const useCases = (dependencies: any, baseLogger: BaseLoggerFactory) => {
  return useCaseFactory(dependencies, baseLogger);
};
