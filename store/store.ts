import { configureStore } from "@reduxjs/toolkit";
import customerSlice from "./slices/CustomerSlice";
import itemSlice from "./slices/ItemSlice";
import orderSlice from "./slices/OrderSlice";

export const store = configureStore({
    reducer: {
        customer: customerSlice,
        item: itemSlice,
        order: orderSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
