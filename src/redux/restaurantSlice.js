import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    restaurantDetails: null,
    restaurantMenu: null,
  },
  reducers: {
    addRestaurantDetails: (state, action) => {
      state.restaurantDetails = action.payload;
    },
    addRestaurantMenu: (state, action) => {
      state.restaurantMenu = action.payload;
    },
  },
});
export const { addRestaurantDetails, addRestaurantMenu } =
  restaurantSlice.actions;
export default restaurantSlice.reducer;
