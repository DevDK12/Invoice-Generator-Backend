import express from 'express';

import { postLoginUser, postRegisterUser } from '../controllers/user.js';
import { loginValidators, registerValidators } from '../middlewares/user-validation.js';




const router = express.Router();



router.post('/register', registerValidators, postRegisterUser);
router.post('/login', loginValidators, postLoginUser);




export default router;