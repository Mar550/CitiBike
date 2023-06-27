import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    quantity: 0,
    total: 0,
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addProduct: (state,action)=>{
            state.products.push(action.payload)
            state.quantity += 1
            state.total += action.payload.price * action.payload.quantity
        },
        removeProduct: (state,action)=>{
            let removedProduct = state.products.find( product => product._id === action.payload) 
            state.products = state.products.filter((product)=> product._id !== action.payload)
            state.quantity -= 1 
            state.total -= (removedProduct.price * removedProduct.quantity)

        },
        clearCart: (state)=>{
            state.products = [];
            state.total = 0;
            state.quantity = 0;
            window.location.reload();
        }
        }
    }
);


export const { addProduct, removeProduct, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
