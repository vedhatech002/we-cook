import { configureStore } from "@reduxjs/toolkit";
import homePageReducer from "./homePageSlice";
import locationReducer from "./locationSlice";
import filteredResReducer from "./filteredResSlice";
import restaurantReducer from "./restaurantSlice";

const appStore = configureStore({
  reducer: {
    homePage: homePageReducer,
    location: locationReducer,
    filteredRes: filteredResReducer,
    restaurant: restaurantReducer,
  },
});

export default appStore;
