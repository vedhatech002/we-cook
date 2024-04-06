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
    increamentQuantity: (state, action) => {
      const id = action.payload;
      state.items = state.items.map((item) => {
        if (item.id === id) {
          item.quantity += 1;
        }
        return item;
      });
    },
  },
});

export const {
  addCurrentRestaurant,
  addToCart,
  clearCart,
  addError,
  increamentQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
