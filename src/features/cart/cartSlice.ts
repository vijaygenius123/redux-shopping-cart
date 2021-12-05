import {createSlice} from "@reduxjs/toolkit";

export interface CartState{
    items: {[productId: string]: string}
}

const initialState: CartState = {
    items: {}
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {}
})

export default cartSlice.reducer
