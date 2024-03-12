import mongoose, { type ConnectOptions } from 'mongoose';
import logger from '../logger';
import config from '../config';

export const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(config.db.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions);
        logger.info(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        logger.error(error);
        process.exit(1);
    }
};
