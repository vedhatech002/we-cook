import { createContext } from "react";

const appContext = createContext({
  islocationModalOpen: false,
  locationDetails: null,
});

export default appContext;
