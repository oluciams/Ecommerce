import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../../interface/Product";


// export const initialState: InitialStateCart = {
//   products: [],
// }

const initialState: Product[] = []

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    add: (state: any, action: PayloadAction<Product>) => {
     
      const itemExists = state.find((item: Product) => item.id === action.payload.id);

      if (itemExists) {
        return state.map((item: Product) => item.id === action.payload.id
        ? { ...item, quantity: item.quantity  as number + 1 } : item) 
      }
      return [...state, { ...action.payload, quantity: 1 } ]
    },
  },
});

export const {add} = cartSlice.actions

export default cartSlice.reducer