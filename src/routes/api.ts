import { Router } from 'express';
import { api } from '../controllers/api';
// eslint-disable-next-line new-cap
const router = Router();

router.get('/', api);

export default router;
