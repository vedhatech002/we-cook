import {
  addDeliveryAddress,
  addphoneNumber,
  signInModalToggle,
} from "@/redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Checkout = () => {
  const dispatch = useDispatch();
  const { userDetails, deliveryAddress } = useSelector((store) => store.user);
  const [phoneNum, setPhoneNum] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div className="w-8/12 font-poppins">
      {/* line step div */}
      <div></div>
      {/* chekout info div */}
      <div className="space-y-6">
        {/* account */}
        {!userDetails ? (
          <div className="bg-white px-8 py-6 flex items-center justify-between w-full">
            <div>
              <h2 className="text-lg font-semibold">Account</h2>
              <p className="font-Inter text-sm font-medium text-gray-500">
                To place your order now, log in to your Account
              </p>
              <button
                className="px-8 py-2 text-white rounded-sm text-sm mt-3 font-semibold bg-orange-500"
                onClick={() => {
                  dispatch(signInModalToggle());
                }}
              >
                Login
              </button>
            </div>
            <div>
              <img
                className="w-24"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
              />
            </div>
          </div>
        ) : (
          <div className="bg-white px-8 py-6 flex flex-col gap-4 w-full">
            <div className="flex items-center gap-6">
              <h2 className="font-semibold text-lg">Logged in</h2>
              <img className="w-5" src="/check.png" />
            </div>
            <div>
              <h4 className="font-medium text-sm text-gray-500">
                {userDetails.userName}
                <span className="text-black"> | </span> {userDetails.userEmail}
              </h4>
            </div>
          </div>
        )}
        {/* account end */}
        {/* phoneNum start */}
        <div className="bg-white px-8 py-6 w-full">
          <div className="flex items-center  justify-between">
            <div className="flex items-center gap-4">
              <h2
                className={
                  "font-semibold text-lg " + (!userDetails && "text-gray-400")
                }
              >
                Mobile number
              </h2>
              {userDetails?.phoneNum && (
                <img className="w-5 " src="/check.png" />
              )}
            </div>
            {userDetails && userDetails?.phoneNum && (
              <button
                className="text-sm font-semibold text-green-500"
                onClick={() => {
                  dispatch(addphoneNumber(null));
                }}
              >
                Change
              </button>
            )}
          </div>
          {userDetails &&
            (userDetails.phoneNum ? (
              <div className="mt-3">
                <h2 className="text-sm font-medium text-gray-500">
                  {userDetails.phoneNum}
                </h2>
              </div>
            ) : (
              <div className="mt-3 flex gap-4">
                <input
                  className="border-[1.5px] text-gray-500 font-medium border-orange-500 px-4 py-0.5 outline-none rounded-sm"
                  type="number"
                  required
                  value={phoneNum}
                  placeholder="enter your mobile num"
                  onChange={(e) => {
                    setPhoneNum(e.target.value);
                  }}
                />
                <button
                  className="px-4 py-0.5 bg-orange-500 hover:drop-shadow-sm rounded-sm text-white font-semibold"
                  onClick={() => {
                    dispatch(addphoneNumber(phoneNum));
                  }}
                >
                  Submit
                </button>
              </div>
            ))}
        </div>
        {/* phone Num end */}
        {/* delivery address */}
        <div className="bg-white px-8 py-6 w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h2
                className={
                  "font-semibold text-lg " +
                  (!userDetails?.phoneNum && "text-gray-400")
                }
              >
                Delivery Address
              </h2>
              {deliveryAddress && <img className="w-5 " src="/check.png" />}
            </div>
            <button
              className="text-green-500 text-sm font-semibold"
              onClick={() => {
                dispatch(addDeliveryAddress(null));
              }}
            >
              change
            </button>
          </div>
          {userDetails &&
            userDetails?.phoneNum &&
            (deliveryAddress ? (
              <div className="mt-3">
                <p className="text-sm font-Inter font-medium text-gray-500">
                  {deliveryAddress}
                </p>
              </div>
            ) : (
              <div className="mt-4 flex flex-col">
                <textarea
                  className="border-[1.5px] px-2 py-0.5 text-sm text-gray-500 outline-none rounded-sm border-orange-500 w-4/12 max-h-20"
                  rows={10}
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                ></textarea>
                <button
                  className="px-4 py-0.5 w-4/12 mt-3 bg-orange-500 hover:drop-shadow-sm rounded-sm text-white font-semibold"
                  onClick={() => {
                    dispatch(addDeliveryAddress(address));
                  }}
                >
                  confirm address
                </button>
              </div>
            ))}
        </div>
        {/* delivery address end */}
        {/* pay ment */}
        <div className="bg-white px-8 py-6 w-full">
          <h2
            className={
              "font-semibold text-lg " + (!deliveryAddress && "text-gray-400")
            }
          >
            Payment
          </h2>
          {userDetails && userDetails?.phoneNum && deliveryAddress && (
            <button className="capitalize font-semibold bg-green-500 px-4 py-1.5 text-white w-full mt-3 rounded-sm">
              Proceed to pay
            </button>
          )}
        </div>
        {/* end payment */}
      </div>
    </div>
  );
};

export default Checkout;
