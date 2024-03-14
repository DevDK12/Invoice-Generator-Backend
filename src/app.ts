import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv'; dotenv.config({ path: './.env' });
import NodeCache from 'node-cache';
import morgan from 'morgan';
import cors from 'cors';


import globalError from './middlewares/globalError.js';


import userRouter from './routes/user.js';
import productRouter from './routes/product.js';
import invoiceRouter from './routes/invoice.js';





const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"))

export const myCache = new NodeCache();

app.use(cors());



app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(process.env.NODE_ENV === 'production' ? 'Production' : 'Development');
    next();
})





//_ Routes

app.get('/api/v1', (req: Request, res: Response, next: NextFunction) => {
    res.json({
        status: 'success',
        message: 'API working',
    })
})


app.use('/api/v1/user', userRouter);
app.use('/api/v1/product', productRouter);
app.use('/api/v1/invoice', invoiceRouter);


app.use('*', (req, res, next) => {
    res.status(404).json({
        status: 'fail',
        message: 'API not found',
    })
})


app.use(globalError);



export default app;