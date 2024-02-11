import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./src/main.css";
import Header from "./src/components/Header";
import { useState, useEffect } from "react";
import useSearchRestaruants from "./src/utils/useSearchRestaruants";

const AppLayout = () => {
  const [location, setLocation] = useState(null);
  const [finalLocation, setFinalLocation] = useState(null);
  const [searchBtnClicked, setSearchBtnClicked] = useState(false);

  const restaruantData = useSearchRestaruants(finalLocation);
  searchBtnClicked ? console.log(restaruantData) : "";

  const handleInputValue = (e) => {
    setLocation(e.target.value);
  };

  const getLocation = () => {
    setFinalLocation(location);
    setSearchBtnClicked(true);
  };

  return (
    <>
      <Header
        handleLocation={getLocation}
        value={location}
        handleInput={handleInputValue}
      />
      <div></div>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
