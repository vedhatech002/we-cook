import useRazorpay from "react-razorpay";
import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "@/redux/CartSlice";
import { useNavigate } from "react-router-dom";

const PaymentGateway = () => {
  const { currentRestaurant, items, totalCost } = useSelector(
    (store) => store.cart
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Razorpay, isLoaded] = useRazorpay();

  const handlePayment = useCallback(() => {
    const order = "";

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY,
      amount: totalCost,
      currency: "INR",
      name: currentRestaurant.name,
      description: "Test Transaction",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/" +
        currentRestaurant?.cloudinaryImageId,
      order_id: order.id,
      handler: (res) => {
        console.log(res);
        if (res.razorpay_payment_id) {
          dispatch(clearCart());
          navigate("/orderSuccess");
        }
      },
      config: {
        display: {
          blocks: {
            banks: {
              name: "All payment methods",
              instruments: [
                {
                  method: "upi",
                },
                {
                  method: "card",
                },
                {
                  method: "wallet",
                },
                {
                  method: "netbanking",
                },
              ],
            },
          },
          sequence: ["block.banks"],
          preferences: {
            show_default_blocks: false,
          },
        },
      },

      prefill: {
        name: "wecook corp",
        email: "payment@wecook.com",
        contact: "9999999999",
      },
      notes: {
        address: "wecook Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzpay = new Razorpay(options);
    rzpay.open();
  }, [Razorpay]);

  //   useEffect(() => {
  //     if (isLoaded) {
  //       handlePayment();
  //     }
  //   }, [isLoaded, handlePayment]);

  return (
    <button
      className="capitalize font-semibold bg-green-500 px-4 py-1.5 text-white w-full mt-3 rounded-sm"
      onClick={handlePayment}
    >
      Proceed to pay
    </button>
  );
};

export default PaymentGateway;
