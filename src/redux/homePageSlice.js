import { createSlice } from "@reduxjs/toolkit";

const homePageSlice = createSlice({
  name: "homepageData",
  initialState: {
    topRestaruants: null,
    cuisines: null,
    restaurants: null,
  },
  reducers: {
    addTopRestaruants: (state, action) => {
      state.topRestaruants = action.payload;
    },
    addCuisines: (state, action) => {
      state.cuisines = action.payload;
    },
    addRestaurants: (state, action) => {
      state.restaurants = action.payload;
    },
  },
});

export const { addTopRestaruants, addCuisines, addRestaurants } =
  homePageSlice.actions;

export default homePageSlice.reducer;
