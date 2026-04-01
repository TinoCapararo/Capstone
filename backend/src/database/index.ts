import { initDatabase } from 'pangea-server';
import { models } from './models';
import { seeds } from './seeds';

export const { connectDatabase, disconnectDatabase } = initDatabase(models, seeds);
