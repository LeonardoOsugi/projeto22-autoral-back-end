import { postPayments } from "@/controllers";
import { authenticateToken } from "@/middlewares";
import { Router } from "express";



const paymentsRouter = Router();

paymentsRouter
    .all('/*', authenticateToken)
    .post('/', postPayments)
export { paymentsRouter };