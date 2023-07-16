import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     cart : [{ 'name': 'hello redux', 'qty':100 , "id": 142353534242455},{'name': 'hello2redux', 'qty':70 , "id": 142353534242478},{'name': 'hello3 redux', 'qty':10 , "id": 142353674242455}],
// }
const initialState = {
    user : {},
}

export const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers:{
        setGlobalUser : (state,action)=>{
            state.user = action.payload;
        },
    }
})


export const {setGlobalUser} = userSlice.actions;
export default userSlice.reducer;