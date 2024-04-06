import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartNotification = () => {
  const cartitems = useSelector((store) => store.cart.items);
  if (cartitems.length <= 0) return;
  return (
    <Link
      to={"/cart"}
      className="bg-green-600 px-6 py-4 fixed  top-[91vh] text-white font-poppins font-semibold flex items-center justify-between w-8/12 z-20"
    >
      <span>{cartitems.length} items added</span>
      <span className="flex gap-2">
        view cart{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          width={24}
          height={24}
        >
          <path fill="none" d="M0 0H256V256H0z"></path>
          <circle fill="currentcolor" cx="80" cy="216" r="16"></circle>
          <circle fill="currentcolor" cx="184" cy="216" r="16"></circle>
          <path
            fill="none"
            stroke="currentcolor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
            d="M42.286 72h179.428l-26.398 92.396A16 16 0 01179.93 176H84.07a16 16 0 01-15.385-11.604L32.514 37.802A8 8 0 0024.824 32H8"
          ></path>
        </svg>
      </span>
    </Link>
  );
};

export default CartNotification;
