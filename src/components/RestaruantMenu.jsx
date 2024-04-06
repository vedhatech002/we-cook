import { useParams } from "react-router";
import MenuCategory from "./MenuCategory";
import useRestaruantMenu from "@/hooks/useRestaruantMenu";
import { useSelector } from "react-redux";
import { useState } from "react";
import CartNotification from "./CartNotification";

const RestaruantMenu = () => {
  const [showIndex, setShowIndex] = useState(0);
  const { resId } = useParams();
  useRestaruantMenu(resId);
  // const cartError = useSelector((store) => store.cart.error);

  const resDetails = useSelector((store) => store.restaurant.restaurantDetails);
  const resMenus = useSelector((store) => store.restaurant.restaurantMenu);

  return resDetails ? (
    <main className="w-8/12 mx-auto pt-32 font-poppins relative">
      <CartNotification />

      {/* restaruant details */}
      <section className="py-6 relative">
        <h4 className="text-2xl font-bold">{resDetails?.name}</h4>
        <div className="mt-10 bg-gradient-to-b from-white via-gray-200 to-gray-300 p-4 rounded-b-3xl">
          <div className="bg-white p-4 rounded-2xl">
            <p className="flex font-bold  font-Inter items-center gap-2 ">
              <span>
                <svg
                  className="text-orange-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="12"
                  fill="none"
                  viewBox="0 0 21 20"
                >
                  <path
                    fill="currentcolor"
                    d="M20.323 7.043l-6.279-.913L11.238.44a.795.795 0 00-1.42 0L7.013 6.13l-6.279.913a.79.79 0 00-.437 1.35l4.542 4.428-1.073 6.254a.79.79 0 001.147.834l5.616-2.953 5.616 2.953a.79.79 0 001.147-.833l-1.073-6.255 4.543-4.428a.79.79 0 00.23-.453.789.789 0 00-.668-.897z"
                    opacity="0.75"
                  ></path>
                </svg>
              </span>
              <span>
                {" "}
                {resDetails?.avgRating} ({resDetails?.totalRatingsString})
                <span className="px-2 text-gray-400">•</span>
                {resDetails?.costForTwoMessage}
              </span>
            </p>
            <p className="text-sm font-medium text-orange-500 font-Inter mt-1">
              {resDetails?.cuisines.join(", ")}
            </p>
            <div className=" mt-6 flex  ">
              <div class="line_container">
                <span class="line_rounder"></span>
                <span class="line"></span>
                <span class="line_rounder_2"></span>
              </div>
              <div className="space-y-3 ml-3">
                <p className="text-sm font-bold  ">
                  Outlet
                  <span className="text-[0.8rem] text-gray-400 font-normal px-2">
                    {resDetails?.areaName}
                  </span>
                </p>
                <p className="text-sm font-bold ">
                  {resDetails?.sla?.minDeliveryTime}-
                  {resDetails?.sla?.maxDeliveryTime}mins
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="text-gray-500 flex items-center gap-1 justify-center text-sm border-b pb-3">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={20}
              height={20}
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path
                fill="#acbcbe"
                d="M8.1 13.34l2.83-2.83L3.91 3.5a4.008 4.008 0 000 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"
                className="color000000 svgShape"
              ></path>
            </svg>
          </span>
          <span className="font-poppins tracking-[2px]">MENU</span>
          <span className="-ml-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={20}
              height={20}
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path
                fill="#acbcbe"
                d="M8.1 13.34l2.83-2.83L3.91 3.5a4.008 4.008 0 000 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"
                className="color000000 svgShape"
              ></path>
            </svg>
          </span>
        </div>
      </section>
      {/* restaruants category */}
      <section className="bg-gray-200 space-y-3 mb-10">
        {resMenus.map((category, index) => (
          <MenuCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </section>
    </main>
  ) : (
    "loading state to be placed...."
  );
};

export default RestaruantMenu;
