import mongoose from "mongoose";
import validator from "validator";

import {IUser} from "../types/user-types.js";



const Schema = mongoose.Schema;





const UserSchema = new Schema<IUser>({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        validator: validator.default.isEmail,
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






const User = mongoose.model<IUser>('User', UserSchema);


export default User;