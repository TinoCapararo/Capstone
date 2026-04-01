import { startServer } from 'pangea-server';
// router
import { setRoutes } from './router/routes';
// database
import { connectDatabase, disconnectDatabase } from './database';

startServer({ setRoutes, connectDatabase, disconnectDatabase });
