import { createSlice } from "@reduxjs/toolkit";

const filteredResSlice = createSlice({
  name: "filteredRes",
  initialState: {
    filteredRes: [],
  },
  reducers: {
    addFilteredRes: (state, action) => {
      state.filteredRes = action.payload;
    },
  },
});

export const { addFilteredRes, addFastDelivery, removeFastDalivery } =
  filteredResSlice.actions;

export default filteredResSlice.reducer;
