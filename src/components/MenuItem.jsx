import { addCurrentRestaurant, addError, addToCart } from "@/redux/CartSlice";
import { FOOD_IMG_URL } from "@/utils/constant";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const MenuItem = (props) => {
  const { name, price, defaultPrice, description, imageId } =
    props.data?.card?.info;

  const restaurantDetails = useSelector(
    (store) => store.restaurant.restaurantDetails
  );
  const currentRestaurant = useSelector(
    (store) => store.cart.currentRestaurant
  );
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleAddItem = () => {
    // console.log(restaurantDetails);
    // console.log(props.data?.card?.info);
    const item = props.data?.card?.info;

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
            ...props.data?.card?.info,
            quantity: 1,
            cost: props.data?.card?.info?.price
              ? props.data?.card?.info?.price
              : props.data?.card?.info?.defaultPrice,
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
          ...props.data?.card?.info,
          quantity: 1,
          cost: props.data?.card?.info?.price
            ? props.data?.card?.info?.price
            : props.data?.card?.info?.defaultPrice,
        })
      );
    }
  };

  return (
    <div className="border-b-2 py-6 px-2 grid grid-cols-[3fr,1fr] gap-4">
      <div>
        <h6 className="text-lg font-semibold">{name}</h6>
        <span className="text-sm font-semibold ">
          ₹ {price ? price / 100 : defaultPrice / 100}
        </span>
        <p className="text-xs font-normal font-Inter text-gray-600 text-left ">
          {description}
        </p>
      </div>
      <div className="relative">
        {imageId && (
          <img
            className="!w-[150px] !h-[110px] rounded object-cover"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
          />
        )}
        <button
          onClick={() => handleAddItem()}
          className="px-4 font-semibold py-1 bg-white text-green-500 rounded-md absolute -bottom-2 left-9 shadow-md hover:bg-gray-100"
        >
          Add +
        </button>
      </div>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
};

export default MenuItem;
