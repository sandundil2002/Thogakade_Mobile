import {CartModel} from "./cartModel";

export interface OrderModel {
    id: string;
    customerId: string;
    items: CartModel[];
    totalPrice: number;
}