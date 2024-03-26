import ReactDOM from "react-dom/client";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./src/main.css";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import SearchLocation from "./src/components/SearchLocation";
import { Provider } from "react-redux";
import appStore from "@/redux/appStore";

const AppLayout = () => {
  return (
    <main>
      <Provider store={appStore}>
        <SearchLocation />
        <Header />
        <Body />
      </Provider>
    </main>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
