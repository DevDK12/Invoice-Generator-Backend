import express from 'express';

import {getLatestProducts, getAllProducts} from '../controllers/product.js';




const router = express.Router();



router.get('/latest', getLatestProducts);
router.get('/all', getAllProducts );






export default router;