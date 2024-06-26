import { configureStore } from "@reduxjs/toolkit";
import homePageReducer from "./homePageSlice";
import locationReducer from "./locationSlice";
import filteredResReducer from "./filteredResSlice";
import restaurantReducer from "./restaurantSlice";
import searchReducer from "./searchSlice";
import searchResultReducer from "./searchResultSlice";
import cartReducer from "./CartSlice";
import userReducer from "./userSlice";

const appStore = configureStore({
  reducer: {
    homePage: homePageReducer,
    location: locationReducer,
    filteredRes: filteredResReducer,
    restaurant: restaurantReducer,
    search: searchReducer,
    searchResult: searchResultReducer,
    cart: cartReducer,
    user: userReducer,
  },
});

export default appStore;
