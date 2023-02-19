import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./reducer/slices/cartSlice";
import { productsSlice } from "./reducer/slices/productsSlice";


export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    products: productsSlice.reducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
