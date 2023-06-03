import 'reflect-metadata';
import 'express-async-errors';
import express, { Express } from 'express';
import cors from 'cors';
import { connectDb, disconnectDB, loadEnv } from './config';
import { productsRouter } from './routers';
import { handleApplicationErrors } from './middlewares';
loadEnv();

const app = express();

app.use(cors()).use(express.json()).use('/products', productsRouter).use(handleApplicationErrors)

export function init(): Promise<Express> {
    connectDb();
    return Promise.resolve(app);
}
  
export async function close(): Promise<void> {
    await disconnectDB();
}
  
export default app;