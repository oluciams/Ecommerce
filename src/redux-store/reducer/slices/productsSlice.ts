import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../../types/app";

export interface ProductsState {
  products: Product[]
}

const initialState: ProductsState = {
  products: []
}

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload
    }
  },

});


export const { getProducts } = productsSlice.actions;

export default productsSlice.reducer

