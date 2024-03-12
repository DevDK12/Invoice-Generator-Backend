import express from 'express';

import { postRegisterUser } from '../controllers/user.js';
import { registerValidators } from '../middlewares/user-validation.js';




const router = express.Router();



router.post('/register', registerValidators, postRegisterUser);




export default router;