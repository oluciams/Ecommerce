import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./reducer/slices/cartSlice";
import cartTotalSlice from "./reducer/slices/cartTotalSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartTotal: cartTotalSlice,
  }
});

export type RootState = ReturnType<typeof store.getState>
