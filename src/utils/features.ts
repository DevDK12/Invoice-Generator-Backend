import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';



export const genHashedPassword = async (password: string) => {
    const hashedPassword = await bcrypt.hash(password, 12);
    return hashedPassword;
}




export const verifyPassword = async (password: string, hashedPassword: string) => {
    return await bcrypt.compare(password, hashedPassword);
}





export const decodeJWT = (token: string, secret: string) => {
    return jwt.verify(token, secret) as jwt.JwtPayload;
}



export const getAccessToken = (
    userData: {
        userId: string,
        userName: string,
    }, 
    secret: string, 
    expiry: string
) => {
    return jwt.sign({userData}, secret, { expiresIn: expiry });
}