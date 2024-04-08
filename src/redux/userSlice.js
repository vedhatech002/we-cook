import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isSigninModalOpen: false,
    userDetails: null,
    deliveryAddress: null,
  },
  reducers: {
    signInModalToggle: (state) => {
      state.isSigninModalOpen = !state.isSigninModalOpen;
    },
    addLoginUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    addphoneNumber: (state, action) => {
      if (state.userDetails) {
        state.userDetails.phoneNum = action.payload;
      }
    },
    addDeliveryAddress: (state, action) => {
      state.deliveryAddress = action.payload;
    },
  },
});

export const {
  signInModalToggle,
  addLoginUserDetails,
  addphoneNumber,
  addDeliveryAddress,
} = userSlice.actions;
export default userSlice.reducer;
