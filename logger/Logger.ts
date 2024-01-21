import { Logger, addColors, createLogger, format, transports } from 'winston';

const formatTags: (obj: object) => string = (obj) =>
  obj
    ? Object.entries(obj)
        .map((e: string[]) => `${e[0]}="${typeof e[1] === 'object' ? formatTags(e[1]) : `${e[1]}`}"`)
        .join(' ')
    : '';

const formatMessage: (name: string, ...args: any) => string = (name: string, ...args: any) => {
  const params = args[0];
  if (params.length) {
    const msg = params.shift();
    const argsTags = params.map(formatTags);

    return `function="${name}" ${msg !== '' ? `msg="${msg}"` : ''} ${argsTags.join(' ')}`;
  }

  return `function="${name}" msg="${params[0]}"`;
};

const info =
  (logger: Logger) =>
  (name: string) =>
  (...args: any) =>
    logger.info(formatMessage(name, args));
const debug =
  (logger: Logger) =>
  (name: string) =>
  (...args: any) =>
    logger.debug(formatMessage(name, args));
const warn =
  (logger: Logger) =>
  (name: string) =>
  (...args: any) =>
    logger.warn(formatMessage(name, args));
const error =
  (logger: Logger) =>
  (name: string) =>
  (...args: any) =>
    logger.error(formatMessage(name, args));

export type BaseLogger = {
  info: (...args: any) => void;
  debug: (...args: any) => void;
  warn: (...args: any) => void;
  error: (...args: any) => void;
};

export type BaseLoggerFactory = (name: string) => BaseLogger;

export const logger: (logLevel: string) => BaseLoggerFactory = (logLevel: string) => {
  addColors({
    debug: 'green',
    info: 'white',
    error: 'red',
    warn: 'yellow'
  });
  const logger = createLogger({
    level: logLevel,
    transports: [new transports.Console()],
    format: format.combine(
      format.colorize({ all: true }),
      format.timestamp(),
      format.printf(({ timestamp, level, message }) => {
        return `[${level}] time=${timestamp} ${message}`;
      })
    )
  });
  return (msg: string) => ({
    info: info(logger)(msg),
    debug: debug(logger)(msg),
    warn: warn(logger)(msg),
    error: error(logger)(msg)
  });
};
