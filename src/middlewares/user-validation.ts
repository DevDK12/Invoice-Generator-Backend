import { body } from 'express-validator';
import User from '../models/usesr.js';
import AppError from '../error/appError.js';




export const registerValidators = [
    body('email')
        .isEmail()
        .withMessage('Please enter a valid email')
        .custom(async email => {
            const user = await User.find({email});
            if(user){
                throw new AppError('User already exists', 422);
            }
        }),


    body('password')
        .trim()
        .isLength({ min: 5 })
        .withMessage('Password must be at least 5 characters long'),


    body('name')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Name is required'),

];





export const loginValidators = [


    body('email')
        .isEmail()
        .withMessage('Please enter a valid email'),
        
    body('password')
        .trim()
        .isLength({ min: 5 })
        .withMessage('Password must be at least 5 characters long'),

];