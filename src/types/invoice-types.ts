export type TCartItem = {
    _id: string,
    name: string,
    price: number,
    photo: string,
    quantity: number,
};



export interface postOrderProductType {
    userName: string,
    userId: string,
    userEmail: string,
    products: TCartItem[],
    total: number,
    gst: number,
    grandTotal: number,
}