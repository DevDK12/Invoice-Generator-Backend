import express from 'express';

import {postGenerateInvoice} from '../controllers/invoice.js';




const router = express.Router();


router.post('/generate', postGenerateInvoice);



export default router;