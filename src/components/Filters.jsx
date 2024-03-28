import { addFilteredRes } from "@/redux/filteredResSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Filters = () => {
  const [selectedId, setselectedId] = useState("all");
  const dispatch = useDispatch();
  const allRestaruants = useSelector(
    (store) => store.homePage.restaurants.resData
  );
  const { fastDelivery } = useSelector((store) => store.filteredRes);
  const handleFilter = (e) => {
    const filterid = e.target.id;
    switch (filterid) {
      case "all":
        setselectedId("all");
        dispatch(addFilteredRes(allRestaruants));

        break;
      case "fastDelivery":
        setselectedId("fastDelivery");
        const fastDeliveryRes = allRestaruants.filter(
          (res) => res.info?.sla?.deliveryTime <= 30
        );
        dispatch(addFilteredRes(fastDeliveryRes));
        break;
      case "rating":
        setselectedId("rating");
        const topRatedRes = allRestaruants.filter(
          (res) => res.info?.avgRating > 4
        );
        dispatch(addFilteredRes(topRatedRes));
        break;
      case "veg":
        setselectedId("veg");
        const vegOnly = allRestaruants.filter((res) => res.info?.veg === true);
        dispatch(addFilteredRes(vegOnly));
        break;
      case "offer":
        setselectedId("offer");
        const offer = allRestaruants.filter((res) => {
          const resObj = res.info?.aggregatedDiscountInfoV3;
          return (
            typeof res.info?.aggregatedDiscountInfoV3?.header !== "undefined"
          );
        });
        dispatch(addFilteredRes(offer));
        break;
      default:
      // Handle default case if needed
    }
  };
  return (
    <div className="my-6 flex items-center gap-8">
      <button className="flex items-center text-sm font-medium font-poppins gap-2 border-gray-300 border-[1.5px] px-4 py-1 rounded-full text-gray-600">
        <span> Filter</span>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 2"
            viewBox="0 0 30 30"
            width={16}
            height={16}
          >
            <path
              fill="#111224"
              d="M17 11H4a1 1 0 010-2h13a1 1 0 010 2zm9 0h-4a1 1 0 010-2h4a1 1 0 010 2z"
            ></path>
            <path
              fill="#111224"
              d="M19.5 13.5A3.5 3.5 0 1123 10a3.5 3.5 0 01-3.5 3.5zm0-5A1.5 1.5 0 1021 10a1.5 1.5 0 00-1.5-1.5zM26 21H13a1 1 0 010-2h13a1 1 0 010 2zM8 21H4a1 1 0 010-2h4a1 1 0 010 2z"
            ></path>
            <path
              fill="#111224"
              d="M10.5 23.5A3.5 3.5 0 1114 20a3.5 3.5 0 01-3.5 3.5zm0-5A1.5 1.5 0 1012 20a1.5 1.5 0 00-1.5-1.5z"
            ></path>
          </svg>
        </span>
      </button>
      {/* filter buttons */}
      <div className="flex items-center gap-2" onClick={handleFilter}>
        <button
          id="all"
          className={
            "flex items-center text-sm font-medium font-poppins gap-2  border-[1.5px] px-4 py-1 rounded-full text-gray-600 cursor-pointer" +
            (selectedId === "all" ? " border-orange-500 " : "border-gray-300")
          }
        >
          All
        </button>
        <button
          id="fastDelivery"
          className={
            "flex items-center text-sm font-medium font-poppins gap-2 border-[1.5px] px-4 py-1 rounded-full text-gray-600 cursor-pointer " +
            (selectedId === "fastDelivery"
              ? " border-orange-500 "
              : "border-gray-300")
          }
        >
          Fast Delivery
        </button>
        <button
          id="rating"
          className={
            "flex items-center text-sm font-medium font-poppins gap-2  border-[1.5px] px-4 py-1 rounded-full text-gray-600 cursor-pointer" +
            (selectedId === "rating"
              ? " border-orange-500 "
              : "border-gray-300")
          }
        >
          Rating 4.0
        </button>
        <button
          id="veg"
          className={
            "flex items-center text-sm font-medium font-poppins gap-2  border-[1.5px] px-4 py-1 rounded-full text-gray-600 cursor-pointer" +
            (selectedId === "veg" ? " border-orange-500 " : "border-gray-300")
          }
        >
          Pure Veg
        </button>
        <button
          id="offer"
          className={
            "flex items-center text-sm font-medium font-poppins gap-2  border-[1.5px] px-4 py-1 rounded-full text-gray-600 cursor-pointer" +
            (selectedId === "offer" ? " border-orange-500 " : "border-gray-300")
          }
        >
          Offers
        </button>
      </div>
    </div>
  );
};

export default Filters;
