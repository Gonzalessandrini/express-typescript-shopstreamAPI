import mongoose from 'mongoose';

import { BaseLogger } from '../../../logger/Logger';

export async function openConnection(uri: string, logger: BaseLogger): Promise<void> {
  try {
    console.log('connecting to... ', uri);
    await mongoose.connect(uri);
    logger.info('Connection to mongo successfully opened!');
  } catch (err) {
    logger.error('Failed to open connection to mongo', err);
    throw err;
  }
}
