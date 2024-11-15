import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../components/helper/interfaces";

const initialState: Product[] = []

const cartSlice = createSlice ({
    name: "cart",
    initialState,
    reducers: {
        addProduct:(state, action:PayloadAction<Product>)=>{
            state.push(action.payload);
        },
        removeProduct:(state, action:PayloadAction<number>) => {
            return state.filter((product) => product.id !== action.payload)
        }
    }
})

export const { addProduct, removeProduct } = cartSlice.actions
export default cartSlice.reducer