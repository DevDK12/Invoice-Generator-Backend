import CatchAsync from '../error/catchAsync.js';
import AppError from '../error/appError.js';
import User from '../models/user.js';
import { decodeJWT } from '../utils/features.js';
import { secret } from '../server.js';







const auth = CatchAsync(async (req, res, next) => {
    const AuthHeader = req.get('Authorization');
    if (!AuthHeader) throw new AppError('Invalid Auth Header', 403);

    const token = AuthHeader.split(' ')[1];

    if (!token) throw new AppError('Invalid Auth Header', 403);

    const decoded = decodeJWT(token, secret!);

    const user = await User.findById(decoded.userData.userId);
    (req as any).user = decoded.userData;

    next();
});



export default auth;



