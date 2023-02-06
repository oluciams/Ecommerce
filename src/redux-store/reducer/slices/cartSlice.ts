import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../../interface/Product";
import { ProductId } from "../../../types/app";
//import { InitialStateCart } from "../../../types/app";


// const initialState: InitialStateCart = {
//   products: [],
//   isActiveCart: false   
// }

const initialState: Product[] = []

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    changeButton: (state: any) => {
      state.isActiveCart = true
    },

    add: (state: any, action: PayloadAction<Product>) => {
      const itemExists = state.find(
        (item: Product) => item.id === action.payload.id
      );

      if (itemExists) {
        return state.map((item: Product) =>
          item.id === action.payload.id
            ? { ...item, quantity: (item.quantity as number) + 1 }
            : item
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    },

    remove: (state: any, action: PayloadAction<Product>) => {
      return state.filter((item:any) => item.id !== action.payload.id )
    },

    increaseProductQuantity: (state: any, action: PayloadAction<ProductId>) => {
      return state.map((item: Product) =>
        item.id === action.payload.id
          ? { ...item, quantity: (item.quantity as number) + 1 }
          : item
      );
    },

    decreaseProductQuantity: (state: any, action: PayloadAction<ProductId>) => {
      return state.map((item: Product) =>
        item.id === action.payload.id
          ? { ...item, quantity: (item.quantity as number) - 1 }
          : item
      );
    },
  },
});

export const {
  changeButton,
  add,
  remove,
  increaseProductQuantity,
  decreaseProductQuantity,  
} = cartSlice.actions;

export default cartSlice.reducer