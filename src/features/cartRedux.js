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
            state.quantity += 1; 
            state.products.push(action.payload)
            state.total += action.payload.price * action.payload.quantity
        },
        removeProduct: (state,action)=>{
            const productId = action.payload
            state.products = state.products.filter((product)=> product._id !== productId)
            let quantity = 0;
            let total = 0;
            state.products.forEach((product)=>{
                quantity += product.quantity
                total += product.total * product.price
            })
            state.quantity = quantity
            state.total = total

        },
        calculateTotal: (state)=>{
            let quantity = 0;
            let total = 0;
            
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
