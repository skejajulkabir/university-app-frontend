import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cartslice';
import userReducer from "./features/userSlice"

export const store = configureStore({
  reducer: {
    globalCart : cartReducer,
    globalUser : userReducer,
  },
});