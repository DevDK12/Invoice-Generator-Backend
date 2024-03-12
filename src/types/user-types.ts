export interface postLoginUserTypes {
    email: string,
    password: string,
}



export interface postRegisterUserTypes extends postLoginUserTypes {
    name: string,
}






export interface IUser extends postRegisterUserTypes {
    createdAt: Date;
    updatedAt: Date;

}