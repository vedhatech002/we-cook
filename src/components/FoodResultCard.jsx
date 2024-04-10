import { Link } from "react-router-dom";
import { addCurrentRestaurant, addError, addToCart } from "@/redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import CartNotification from "./CartNotification";

const FoodResultCard = ({ data }) => {
  const currentRestaurant = useSelector(
    (store) => store.cart.currentRestaurant
  );
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleItem = () => {
    const restaurantDetails = data.restaurant?.info;
    const item = data.info;

    const checkValidItem = (restaurantDetails, item) => {
      if (restaurantDetails.id !== currentRestaurant.id) {
        return {
          errorHeading: "Items already in cart",
          errorDesc:
            " Your cart contains items from other restaurant. Would you like to add items from this restaurant, you should clear your cart..",
        };
      }

      const isItemExist = cartItems.find((cartitem) => cartitem.id === item.id);

      if (isItemExist) {
        return {
          errorHeading: "Item already exists in cart",
          errorDesc:
            "Would you like to add more quantity ,you can add through cart page",
        };
      }

      return "valid";
    };
    if (currentRestaurant) {
      const checkValid = checkValidItem(restaurantDetails, item);

      if (checkValid === "valid") {
        dispatch(addCurrentRestaurant(restaurantDetails));
        dispatch(
          addToCart({
            ...item,
            quantity: 1,
            cost: item.price ? item.price : item.defaultPrice,
          })
        );
      } else {
        toast.custom((t) => (
          <div className="bg-white drop-shadow-md rounded-md p-6 font-poppins max-w-lg space-y-4">
            <h2 className="text-lg font-semibold">{checkValid.errorHeading}</h2>
            <p className="font-poppins text-xs text-gray-500">
              {checkValid.errorDesc}
            </p>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="px-16 py-1.5 border-[1.5px] border-green-600"
            >
              Ok
            </button>
          </div>
        ));
      }
    } else {
      dispatch(addCurrentRestaurant(restaurantDetails));
      dispatch(
        addToCart({
          ...item,
          quantity: 1,
          cost: item.price ? item.price : item.defaultPrice,
        })
      );
    }
  };

  return (
    <div className="bg-white font-poppins px-4 py-6 rounded-xl shadow">
      <div className="flex items-center justify-between border-b pb-3 border-dashed">
        <div className="space-y-1">
          <h6 className="text-sm text-gray-600 font-medium">
            By {data.restaurant?.info?.name}
          </h6>
          <p className="flex items-center gap-1 text-xs">
            <span>
              <svg
                className="text-orange-600"
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
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
            <span className="text-gray-500">
              {data.restaurant?.info?.avgRating}
              <span className="px-1">.</span>
              {data.restaurant?.info?.sla?.minDeliveryTime}-
              <span>{data.restaurant?.info?.sla?.maxDeliveryTime} mins</span>
            </span>
          </p>
        </div>
        {/* link will be placed here to navigate */}
        <Link
          to={`/restaurant/${data.restaurant?.info?.id}`}
          className="cursor-pointer"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              fill="#868891"
              fillRule="evenodd"
              d="M13.23 5.54a.65.65 0 10-.918.92l4.89 4.89H5.394a.65.65 0 100 1.3h11.808l-4.89 4.89a.65.65 0 10.919.92l5.718-5.719c.41-.41.41-1.073 0-1.483L13.231 5.54z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="font-Inter">
          {/* <span>{prometed tag will posted here}</span> */}
          <h4 className="text-gray-700 font-semibold">{data.info?.name}</h4>
          <span className="text-sm"> ₹{data.info?.price / 100}</span>
        </div>
        <div className="relative">
          {data.info?.imageId && (
            <img
              className="w-28 h-20 rounded-md"
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                data.info?.imageId
              }
              alt="img"
            />
          )}
          <button
            className={
              "w-20 text-sm font-semibold text-green-500 bg-white shadow-md px-4 py-1 " +
              (data.info?.imageId ? " absolute  -bottom-2 left-5" : " ")
            }
            onClick={handleItem}
          >
            Add +
          </button>
        </div>
      </div>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
};

export default FoodResultCard;
