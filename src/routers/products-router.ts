import { getProducts, getProductsId } from '@/controllers';
import { Router } from 'express';

const productsRouter = Router();

productsRouter
.get('/', getProducts)
.get('/:id', getProductsId)
;

export {productsRouter}