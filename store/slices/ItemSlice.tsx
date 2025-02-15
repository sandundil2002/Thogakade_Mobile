import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemModel } from "../../models/itemModel";

interface ItemState {
    items: ItemModel[];
}

const initialState: ItemState = {
    items: [],
};

const itemSlice = createSlice({
    name: "item",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<ItemModel>) => {
            state.items.push(action.payload);
        },
        updateItem: (state, action: PayloadAction<ItemModel>) => {
            const index = state.items.findIndex((i) => i.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
        },
        deleteItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter((i) => i.id !== action.payload);
        },
    },
});

export const { addItem, updateItem, deleteItem } = itemSlice.actions;
export default itemSlice.reducer;
