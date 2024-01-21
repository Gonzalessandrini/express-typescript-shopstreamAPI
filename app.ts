import { useCases } from './application';
import { initialSetup } from './application/use-cases/Setup/initialSetup/InitialSetup';
import { initConfig } from './config';
import { dataAccess } from './infrastructure/data-access';
import { http } from './infrastructure/interfaces/http';

const config = initConfig();
const { baseLogger } = config;
baseLogger('Gateway').info('Starting app gateway');

dataAccess(config).then((preDataAccessLayer) =>
  initialSetup({
    ...preDataAccessLayer,
    logger: baseLogger('InitialSetup')
  })()
    .then((initConfig) => ({
      ...config,
      ...initConfig
    }))
    .then(dataAccess)
    .then((dataAccessLayer) => useCases(dataAccessLayer, baseLogger))
    .then((useCasesLayer) => http(useCasesLayer, config.http.port, baseLogger))
    .catch((e: Error) => config.baseLogger('InitialSetup').error('Error initializing gateway', e))
);
