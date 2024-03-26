import { createSlice } from "@reduxjs/toolkit";

const homePageSlice = createSlice({
  name: "homepageData",
  initialState: {
    topRestaruants: null,
  },
  reducers: {
    addTopRestaruants: (state, action) => {
      state.topRestaruants = action.payload;
    },
  },
});

export const { addTopRestaruants } = homePageSlice.actions;

export default homePageSlice.reducer;
