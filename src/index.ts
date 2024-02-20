import express, {
    type Application,
    type Request,
    type Response,
} from 'express';
import cors from 'cors';
import helmet from 'helmet';
import router from './routes/api';
import logger from './logger';
import config from './config';
import { dbConnect } from './utils/db';

const app: Application = express();
const { port } = config;

app.use(express.json());

app.use(helmet());
app.use(cors());

(async () => {
    await dbConnect();
})();

app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
    res.json({ status: 'ok' });
});

app.listen(port, () => {
    logger.info(`[⚙️] Listening Here -> http://localhost:${port}`);
});
