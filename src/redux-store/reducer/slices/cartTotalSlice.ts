import { createSlice} from "@reduxjs/toolkit";


export const cartTotalSlice = createSlice({
  name: "cartTotal",
  initialState: {
    items: [],
    subPriceItems: 0,
    tax: 0.0975,
    totalPriceCart: 0,
  },
  reducers: {
    
  },
});

export const {  } =
  cartTotalSlice.actions;

export default cartTotalSlice.reducer;
