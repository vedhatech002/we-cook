import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./src/main.css";
import Header from "./src/components/Header";
import Body from "./src/components/Body";

const AppLayout = () => {
  // const [location, setLocation] = useState("");
  // const [finalLocation, setFinalLocation] = useState("");
  // const [restaruantsData, setRestaruantsData] = useState("");

  // // setRestaruantsData();
  // const resData = useSearchRestaruants(finalLocation);

  // const handleInputValue = (e) => {
  //   setLocation(e.target.value);
  // };

  // const getLocation = () => {
  //   setFinalLocation(location);
  // };

  return (
    <>
      <Header />
      <Body />
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
