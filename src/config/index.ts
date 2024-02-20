import dotenv from 'dotenv-safe';
dotenv.config();

export default {
    port: process.env.PORT ?? 3001,
    db: {
        url: process.env.DB_URL ?? 'mongodb://localhost:27017/test',
    },
};
