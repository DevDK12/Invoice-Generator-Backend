import Product from '../models/product.js'
import CatchAsync from "../error/catchAsync.js";
import { myCache } from "../app.js";





export const getLatestProducts = CatchAsync(async (req, res, next) => {
    const key = 'latest-products'

    let products = [];
    if (myCache.has(key)) {
        products = JSON.parse(myCache.get(key) as string);
    }
    else {
        products = await Product.find().sort({ createdAt: -1 }).limit(5);
        myCache.set(key, JSON.stringify(products));
    }

    res.status(200).json({
        status: 'success',
        data: {
            products,
        }
    })

})





export const getAllProducts = CatchAsync(async (req, res, next) => {

    const key = 'all-products'

    let products = [];
    if (myCache.has(key)) {
        products = JSON.parse(myCache.get(key) as string);
    }
    else {
        products = await Product.find();
        myCache.set(key, JSON.stringify(products));
    }


    res.status(200).json({
        status: 'success',
        data: {
            products,
        }
    })

});
