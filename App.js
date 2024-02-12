import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./src/main.css";
import Header from "./src/components/Header";
import { useState, useEffect } from "react";
import useSearchRestaruants from "./src/utils/useSearchRestaruants";
import HeroSection from "./src/components/HeroSection";

const AppLayout = () => {
  const [location, setLocation] = useState("");
  const [finalLocation, setFinalLocation] = useState("");

  const restaruantData = useSearchRestaruants(finalLocation);
  restaruantData !== null ? console.log(restaruantData) : "";

  const handleInputValue = (e) => {
    setLocation(e.target.value);
  };

  const getLocation = () => {
    setFinalLocation(location);
  };

  return (
    <>
      <Header />
      <HeroSection
        handleLocation={getLocation}
        value={location}
        handleInput={handleInputValue}
      />
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
