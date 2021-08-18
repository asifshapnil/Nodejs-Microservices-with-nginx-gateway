if (!process.env.ALREADY_SET) { require('dotenv').config(); }

import * as http from 'http';
import { app } from './app';

import { DatabaseService } from "./app/servoces/databaseService";
import { Logger } from "./lib/logger";


const logger: any =  new Logger();
const server = http.createServer(app).listen(process.env.PORT || 3000);

server.on('listening', async () => {
    await DatabaseService.getConnection();
    logger.log('info', 'app listening');
});