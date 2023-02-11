import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductId } from "../../../types/app";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    subtotalPriceCart: 0,
  },
  reducers: {
    add: (state: any, action: PayloadAction<Product>) => {
      state.items = [
        ...state.items,
        { ...action.payload, quantity: 1, totalPrice: action.payload.price },
      ];
    },

    increaseProductQuantity: (state: any, action: PayloadAction<ProductId>) => {
      state.items = state.items.map((item: Product) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: (item.quantity as number) + 1,
            totalPrice: item.price * ((item.quantity as number) + 1),
          };
        }
        return item;
      });
    },

    decreaseProductQuantity: (state: any, action: PayloadAction<ProductId>) => {
      state.items = state.items.map((item: Product) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: (item.quantity as number) - 1,
            totalPrice: item.price * ((item.quantity as number) - 1),
          };
        }
        return item;
      });
    },

    remove: (state: any, action: PayloadAction<Product>) => {
      state.items = state.items.filter((item: any) => item.id !== action.payload.id);
    },
  },
});

export const {
  add,
  remove,
  increaseProductQuantity,
  decreaseProductQuantity,
} = cartSlice.actions;

export default cartSlice.reducer