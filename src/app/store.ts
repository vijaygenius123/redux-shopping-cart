import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import productsReducer from "../../lessons/04-slices/productsSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsReducer
    }
})
