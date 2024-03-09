import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./src/main.css";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import SearchLocation from "./src/components/SearchLocation";
import appContext from "./src/utils/appContext";

const AppLayout = () => {
  const [isLocModalOpen, setIsLocModalOpen] = useState(false);

  return (
    <>
      <appContext.Provider
        value={{ islocationModalOpen: isLocModalOpen, setIsLocModalOpen }}
      >
        <SearchLocation />
        <Header />
        <Body />
      </appContext.Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={appRouter} />
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
