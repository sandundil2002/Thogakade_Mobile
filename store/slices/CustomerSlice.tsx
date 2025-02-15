import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CustomerModel } from "../../models/customerModel";

interface CustomerState {
    customers: CustomerModel[];
}

const initialState: CustomerState = {
    customers: [],
};

const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        addCustomer: (state, action: PayloadAction<CustomerModel>) => {
            state.customers.push(action.payload);
        },
        updateCustomer: (state, action: PayloadAction<CustomerModel>) => {
            const index = state.customers.findIndex((customer) => customer.id === action.payload.id);
            if (index !== -1) {
                state.customers[index] = action.payload;
            }
        },
        deleteCustomer: (state, action: PayloadAction<string>) => {
            state.customers = state.customers.filter((customer) => customer.id !== action.payload);

        }
    },
});

export const { addCustomer, updateCustomer, deleteCustomer } = customerSlice.actions;
export default customerSlice.reducer;
