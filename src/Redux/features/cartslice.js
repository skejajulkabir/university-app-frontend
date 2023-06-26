import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     cart : [{ 'name': 'hello redux', 'qty':100 , "id": 142353534242455},{'name': 'hello2redux', 'qty':70 , "id": 142353534242478},{'name': 'hello3 redux', 'qty':10 , "id": 142353674242455}],
// }
const initialState = {
    cart : [],
}

export const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers:{
        settinglocalCartFromPreviouseBrowseToReux : (state,action)=>{
            state.cart = action.payload;
        },
        addToCart: (state, action) => {
            if (state.cart.find((elm)=>elm.id === action.payload.id)) {
                Object.assign(
                state.cart.find((elm)=> elm.id === action.payload.id),
                {"qty" :  state.cart.find((elm)=> elm.id == action.payload.id).qty + 1 }
                );
                }else{
                    state.cart= [...state.cart, action.payload];
                };
                localStorage.setItem("Cart", JSON.stringify(state.cart))
        },
        clearCart: (state)=>{
            state.cart = [];
            localStorage.setItem("Cart", JSON.stringify(state.cart))
        },
        RemoveOneQtyFromCart : (state, action) => {
            Object.assign(
            state.cart.find((elm)=> elm.id == action.payload),
            {"qty" :  state.cart.find((elm)=> elm.id == action.payload).qty - 1 }
            );
            if(state.cart.find((elm)=> elm.id == action.payload).qty <= 0){
                state.cart.map((elm)=>{
                    state.cart = state.cart.filter((elm)=> elm.qty > 0)
                })
            };
            localStorage.setItem("Cart", JSON.stringify(state.cart))
        },
        addOneQtyFromCart : (state, action) => {
            Object.assign(
            state.cart.find((elm)=> elm.id == action.payload),
            {"qty" :  state.cart.find((elm)=> elm.id == action.payload).qty + 1 }
            );
            localStorage.setItem("Cart", JSON.stringify(state.cart))
        },
    }
})


export const {addToCart , clearCart , RemoveOneQtyFromCart , addOneQtyFromCart , settinglocalCartFromPreviouseBrowseToReux} = cartSlice.actions;
export default cartSlice.reducer;