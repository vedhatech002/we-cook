import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    currentRestaurant: null,
    items: [],
    error: null,
  },
  reducers: {
    addCurrentRestaurant: (state, action) => {
      state.currentRestaurant = action.payload;
    },
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
    addError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { addCurrentRestaurant, addToCart, clearCart, addError } =
  cartSlice.actions;

export default cartSlice.reducer;
