import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv'; dotenv.config({ path: './.env' });
import NodeCache from 'node-cache';
import morgan from 'morgan';
import cors from 'cors';





const app = express();

export const myCache = new NodeCache();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"))


app.use(cors());



app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(process.env.NODE_ENV === 'production' ? 'Production' : 'Development');
    next();
})






app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.json({
        status: 'success',
        message: 'API working',
    })
})





app.use('*', (req, res, next) => {
    res.status(404).json({
        status: 'fail',
        message: 'API not found',
    })
})




export default app;