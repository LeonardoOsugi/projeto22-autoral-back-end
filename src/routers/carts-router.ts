import { deleteCarts, getCarts, postCarts } from '@/controllers';
import { authenticateToken } from '@/middlewares';
import { Router } from 'express';

const cartsRouter = Router();
cartsRouter
    .all('/*', authenticateToken)
    .post('/', postCarts)
    .get('/', getCarts)
    .delete('/:id', deleteCarts)

export { cartsRouter }; 