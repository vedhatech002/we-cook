import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    currentRestaurant: null,
    items: [],
    error: null,
    totalCost: null,
  },
  reducers: {
    addCurrentRestaurant: (state, action) => {
      state.currentRestaurant = action.payload;
    },
    addToCart: (state, action) => {
      state.items.push(action.payload);
      state.totalCost = state.items.reduce((total, item) => {
        return total + item.cost;
      }, 0);
    },
    clearCart: (state) => {
      state.items.length = 0;
      state.currentRestaurant = null;
    },
    addError: (state, action) => {
      state.error = action.payload;
    },
    increamentQuantity: (state, action) => {
      const id = action.payload;
      state.items = state.items.map((item) => {
        if (item.id === id) {
          item.quantity += 1;
          item.cost =
            item.quantity * (item.price ? item.price : item.defaultPrice);
        }
        return item;
      });
      state.totalCost = state.items.reduce((total, item) => {
        return total + item.cost;
      }, 0);
    },
    decreamentQuantity: (state, action) => {
      const id = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) {
        if (item.quantity === 1) {
          state.items = state.items.filter((i) => i.id !== id);
        } else {
          state.items = state.items.map((item) => {
            if (item.id === id) {
              item.quantity -= 1;
              item.cost =
                item.quantity * (item.price ? item.price : item.defaultPrice);
            }
            return item;
          });
        }
        state.totalCost = state.items.reduce((total, item) => {
          return total + item.cost;
        }, 0);
      }
    },
  },
});

export const {
  addCurrentRestaurant,
  addToCart,
  clearCart,
  addError,
  increamentQuantity,
  decreamentQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
