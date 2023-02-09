import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductId } from "../../../types/app";

const initialState: Product[] = []

export const cartSlice = createSlice({
  name: "cart", 
  initialState,
  reducers: {

    add: (state: any, action: PayloadAction<Product>) => {
      const itemExists = state.find(
        (item: Product) => item.id === action.payload.id);

      if (itemExists) {
        return state.map((item: Product) =>
          item.id === action.payload.id
            ? {
              ...item,
              quantity: (item.quantity as number) + 1,
             
            }
            : item
        );
      }

      return [
        ...state,
        { ...action.payload, quantity: 1, totalPrice: action.payload.price },
      ];
      
    },

    remove: (state: any, action: PayloadAction<Product>) => {
      return state.filter((item: any) => item.id !== action.payload.id);
    },

    increaseProductQuantity: (state: any, action: PayloadAction<ProductId>) => {
      return state.map((item: Product) =>
        item.id === action.payload.id
          ? {
            ...item, quantity: (item.quantity as number) + 1,
            totalPrice: (item.price * (item.quantity as number + 1))
          }
          : item
      );
    },

    decreaseProductQuantity: (state: any, action: PayloadAction<ProductId>) => {
      return state.map((item: Product) =>
        item.id === action.payload.id
          ? {
              ...item,
              quantity: (item.quantity as number) - 1,
              totalPrice: (item.price * ((item.quantity as number) - 1)),
            }
          : item
      );
    },

    // getTotalCart: (state) => {
    //   let { totalQuantity, totalCount } = state.items.reduce(
    //     (cartTotal, cartItem) => {
    //       const { price, quantity } = cartItem;
    //       const itemTotal = price * quantity;
    //       cartTotal.totalQuantity += itemTotal;
    //       cartTotal.totalCount += price;
    //       return cartTotal;
    //     },
    //     { totalQuantity: 0, totalCount: 0 }
    //   );
    //   state.totalQuantity = parseInt(totalQuantity.toFixed(2));
    //   state.totalCount = totalCount;
    // },

  },
});

export const {
  add,
  remove,
  increaseProductQuantity,
  decreaseProductQuantity,  
} = cartSlice.actions;

export default cartSlice.reducer