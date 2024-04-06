import { increamentQuantity } from "@/redux/CartSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CartItem = ({ cartItem }) => {
  const [changes, setChanges] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <div className="font-poppins  items-center grid grid-cols-[2fr,0.5fr,0.5fr]">
      <div className="flex gap-2 items-center">
        <img className="w-3 h-3" src="/veg.png" alt="VEG" />
        <h6 className="text-xs font-medium">{cartItem.name}</h6>
      </div>
      {/* increment decreement quantity */}
      <div className="flex items-center border-[1.5px]  border-green-300 ">
        <button
          className="px-1 text-gray-400"
          onClick={() => {
            // setQuantity(quantity <= 0 ? 0 : quantity - 1);
          }}
        >
          -
        </button>
        <span className="px-2 text-sm">{cartItem.quantity}</span>
        <button
          className="px-1 text-green-500"
          onClick={() => {
            // setQuantity(quantity + 1);
            dispatch(increamentQuantity(cartItem.id));
          }}
        >
          +
        </button>
      </div>
      <div className="font-Inter  text-end text-xs">
        ₹ {cartItem.cost / 100}
      </div>
    </div>
  );
};

export default CartItem;
