import { schedule } from 'node-cron';

import { BaseLoggerFactory } from '../../../logger/Logger';
import { events } from './Events';

// everyDayEarlyInTheMorning:"0 2 * * *",
// every5Seconds:"*/5 * * * *",
// every10Seconds:"*/10 * * * *"

export const cron = (uoc: any, baseLogger: BaseLoggerFactory) => {
  const logger = baseLogger('Cron');

  logger.info('Started');

  const toSchedule = events(uoc);
  logger.info('Scheduling', { tasks: toSchedule.map((t) => t.name).join(', ') });
  toSchedule.forEach((task) => {
    schedule(task.time, task.uoc);
  });
};
