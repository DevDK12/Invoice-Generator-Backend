import { NextFunction, Request, Response } from "express";
import { postLoginUserTypes, postRegisterUserTypes } from "../types/user-types.js";
import User from "../models/usesr.js";
import CatchAsync from "../error/catchAsync.js";
import { genHashedPassword, verifyPassword } from "../utils/features.js";
import AppError from "../error/appError.js";
import { validationResult } from "express-validator";





export const postRegisterUser = CatchAsync(async (
    req: Request<{}, {}, postRegisterUserTypes>,
    res: Response,
    next: NextFunction
) => {

    const result = validationResult(req);

    if (!result.isEmpty()) {
        const errorMsg = result.array().map(err => err.msg).join(', ');
        throw new AppError(`Validation failed. ${errorMsg}`, 422);
    }


    const { name, email, password } = req.body;



    const hashedPassword = await genHashedPassword(password);

    const newUser = new User({
        name,
        email,
        password: hashedPassword,
    });

    const doc = await newUser.save();

    console.log('Successfully registered ', doc);

    res.status(201).json({
        status: 'success',
        message: 'User registered successfully',
    });


});





export const postLoginUser = CatchAsync(async (
    req: Request<{}, {}, postLoginUserTypes>,
    res: Response,
    next: NextFunction
) => {

    const result = validationResult(req);

    if (!result.isEmpty()) {
        const errorMsg = result.array().map(err => err.msg).join(', ');
        throw new AppError(`Validation failed. ${errorMsg}`, 422);
    }


    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) throw new AppError('No user found', 401);

    const { password: hashedPassword } = user;
    const isMatch = await verifyPassword(password, hashedPassword);

    if(!isMatch){
        throw new AppError('Wrong password entered!', 401);
    }

    console.log('Successfully logged-in ', user._id.toString());

    res.status(201).json({
        status: 'success',
        message: 'User Loggedin successfully',
    });

});


