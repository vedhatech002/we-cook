import { createContext } from "react";

const appContext = createContext({
  islocationModalOpen: false,
  locationDetails: null,
  homePageData: null,
});

export default appContext;
