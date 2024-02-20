import { type RequestHandler } from 'express';
import logger from '../logger';

export const api: RequestHandler = async (req, res) => {
    try {
        const name = req.body.name as string;
        if (!name) {
            res.status(400).json({ message: 'Error: Name is required' });
            return;
        }

        res.status(200).json({ message: `Hello, ${name}` });
    } catch (err) {
        logger.error(err);
        res.status(400).json({ message: 'Error: In route(api)' });
    }
};
