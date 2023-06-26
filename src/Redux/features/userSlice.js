import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     cart : [{ 'name': 'hello redux', 'qty':100 , "id": 142353534242455},{'name': 'hello2redux', 'qty':70 , "id": 142353534242478},{'name': 'hello3 redux', 'qty':10 , "id": 142353674242455}],
// }
const initialState = {
    cart : [],
}

export const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers:{
        settinglocalCartFromPreviouseBrowseToReux : (state,action)=>{
            state.cart = action.payload;
        },
    }
})


export const {settinglocalCartFromPreviouseBrowseToReux} = userSlice.actions;
export default userSlice.reducer;