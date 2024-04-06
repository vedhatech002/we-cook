import isNavigateToGetStarted from "@/hooks/isNavigateToGetStarted";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";

const CartPage = () => {
  isNavigateToGetStarted();
  useState("false");
  const navigate = useNavigate();

  const { currentRestaurant, items } = useSelector((store) => store.cart);
  console.log(items);

  return currentRestaurant ? (
    <section className="h-screen pt-24 bg-gray-200 w-12/12 flex gap-6 px-8 pb-8">
      <div className="bg-white w-8/12">checkout</div>
      <div className="bg-white w-4/12 shadow-md rounded-sm ">
        {/* restaruant details div */}
        <div className="px-6 py-5 flex gap-4 cursor-pointer border-b ">
          <img
            className="w-14 h-14 rounded-sm"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/" +
              currentRestaurant?.cloudinaryImageId
            }
            alt=""
          />
          <div>
            <h2 className="font-poppins  font-semibold">
              {currentRestaurant?.name.length < 30
                ? currentRestaurant?.name
                : currentRestaurant?.name.slice(0, 25) + "..."}
            </h2>
            <p className="text-gray-500 text-xs font-normal font-poppins">
              {currentRestaurant?.areaName}
            </p>
            <hr className="mt-3 h-[2.4px] rounded bg-slate-950 w-10"></hr>
          </div>
        </div>
        {/* cart items div */}
        <div className="px-6 py-2 space-y-4 h-[50vh] overflow-y-auto mt-2">
          {items.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))}
        </div>
      </div>
    </section>
  ) : (
    <div className="h-screen flex flex-col gap-3 pt-20 items-center justify-center font-poppins">
      <img
        className="w-[300px]"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
        alt="empty cart"
      />
      <h2 className="text-xl font-medium mt-2">Your cart is empty</h2>
      <p className="text-xs text-gray-500">
        You can go to home page to view more restaurants
      </p>
      <button
        className="mt-2 px-4 py-2 text-white font-semibold bg-orange-500 rounded-sm hover:drop-shadow-md"
        onClick={() => {
          navigate("/");
        }}
      >
        SEE RESTAURANTS NEAR YOU
      </button>
    </div>
  );
};

export default CartPage;
