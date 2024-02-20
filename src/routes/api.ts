import { Router } from 'express';
import { api } from '../controllers/api';
const router = Router();

router.get('/', api);

export default router;
