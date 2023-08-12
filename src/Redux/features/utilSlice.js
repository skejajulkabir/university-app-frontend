import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     cart : [{ 'name': 'hello redux', 'qty':100 , "id": 142353534242455},{'name': 'hello2redux', 'qty':70 , "id": 142353534242478},{'name': 'hello3 redux', 'qty':10 , "id": 142353674242455}],
// }
const initialState = {
    isLoading: false ,
    isStoreOpen : true ,
    isMainIdVarified : false,
    isLoggedIn : false,
    isAuthority : false,
    isAdmin : false,
    role : "UNAUTHORISED",
}

export const utilSlice = createSlice({
    name : 'utils',
    initialState,
    reducers:{
        isVarified : (state,action)=>{
            state.isMainIdVarified = action.payload;
        },
        setLoading : (state,action)=>{
            state.isLoading = action.payload;
        },
    }
})


export const {isVarified , setLoading } = utilSlice.actions;
export default utilSlice.reducer;