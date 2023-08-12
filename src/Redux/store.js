import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cartslice';
import userReducer from "./features/userSlice";
import utilReducer from './features/utilSlice';

export const store = configureStore({
  reducer: {
    globalCart : cartReducer,
    globalUser : userReducer,
    globalUtils : utilReducer
  },
});