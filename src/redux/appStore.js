import { configureStore } from "@reduxjs/toolkit";
import homePageReducer from "./homePageSlice";
import locationReducer from "./locationSlice";

const appStore = configureStore({
  reducer: {
    homePage: homePageReducer,
    location: locationReducer,
  },
});

export default appStore;
