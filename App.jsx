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
import RestaruantMenu from "@/components/RestaruantMenu";
import Searchpage from "@/components/Searchpage";

import HeroSection from "@/components/HeroSection";
import CartPage from "@/components/CartPage";
import SigninPage from "@/components/SigninPage";
import OrderSuccessPage from "@/components/OrderSuccessPage";
import HomePageShimmer from "@/components/Shimmers/HomePageShimmer";
import RestaruantShimmer from "@/components/Shimmers/RestaruantShimmer";

const AppLayout = () => {
  return (
    <main>
      <Provider store={appStore}>
        <SigninPage />
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
      {
        path: "/getStarted",
        element: <HeroSection />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
  {
    path: "/orderSuccess",
    element: <OrderSuccessPage />,
  },
  {
    path: "/shimmer",
    element: <RestaruantShimmer />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
