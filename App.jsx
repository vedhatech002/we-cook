import ReactDOM from "react-dom/client";
import React from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./src/main.css";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import SearchLocation from "./src/components/SearchLocation";
import { Provider } from "react-redux";
import appStore from "@/redux/appStore";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import RestaruantMenu from "@/components/RestaruantMenu";
import Searchpage from "@/components/Searchpage";

const AppLayout = () => {
  return (
    <main>
      <Provider store={appStore}>
        <SearchLocation />
        <Header />
        <Outlet />
        <Footer />
      </Provider>
    </main>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaruantMenu />,
      },
      {
        path: "search",
        element: <Searchpage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
