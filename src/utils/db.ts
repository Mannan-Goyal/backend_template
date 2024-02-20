import mongoose, { type ConnectOptions } from 'mongoose';
import logger from '../logger';
import config from '../config';

export const dbConnect = async () => {
    try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment
        const conn = await mongoose.connect(config.db.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } as ConnectOptions);
        logger.info(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
