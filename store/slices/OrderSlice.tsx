import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderModel } from "../../models/cartModel";

interface OrderState {
    orders: OrderModel[];
}

const initialState: OrderState = {
    orders: [],
};

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        addOrder: (state, action: PayloadAction<OrderModel>) => {
            state.orders.push(action.payload);
        },
    },
});

export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;
