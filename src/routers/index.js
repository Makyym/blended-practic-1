import { Router } from 'express';
import authRouter from './auth.js';
import productsRouter from './products.js';

const router = Router();

router.use('/products', productsRouter);
router.use('/users', authRouter);

export default router;
