import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    islocationModalOpen: false,
    locationDetails: null,
  },
  reducers: {
    toggleLocationModal: (state) => {
      state.islocationModalOpen = !state.islocationModalOpen;
    },
    addLocationDetails: (state, action) => {
      state.locationDetails = action.payload;
    },
  },
});

export const { toggleLocationModal, addLocationDetails } =
  locationSlice.actions;

export default locationSlice.reducer;
