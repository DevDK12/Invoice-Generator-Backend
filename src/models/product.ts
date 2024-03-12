import mongoose, { Model } from "mongoose";
import { IProduct } from "../types/product-types.js";




const Schema = mongoose.Schema;



const ProductSchema = new Schema<IProduct>({

    photo: {
        type: String,
        required: [true, 'Photo is required'],
    },

    name: {
        type: String,
        required: [true, 'Productname is required'],
    },

    stock: {
        type: Number,
        required: [true, 'Stock is required'],
    },

    price: {
        type: Number,
        required: [true, 'Price is required'],
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
},

    {
        timestamps: true
    }
)







const Product = mongoose.model<IProduct>('Product', ProductSchema);


export default Product;