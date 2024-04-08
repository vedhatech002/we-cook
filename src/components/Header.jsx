import { toggleLocationModal } from "@/redux/locationSlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signInModalToggle } from "@/redux/userSlice";

const Header = () => {
  const locationDetails = useSelector(
    (store) => store.location.locationDetails
  );
  const userDetails = useSelector((store) => store.user.userDetails);
  const dispatch = useDispatch();

  return (
    <header
      className={`font-poppins fixed w-full z-40  py-4 flex items-center justify-between xl:px-36 bg-white lg:px-32 md:px-20 sm:px-16 px-12  ${
        locationDetails !== null ? "shadow-lg" : ""
      }`}
    >
      <div className="logo flex items-center gap-4">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            data-name="Layer 1"
            viewBox="0 0 64 64"
          >
            <path
              fill="#fffaf0"
              stroke="#5f363a"
              d="M16 39.33h6v17.39a3 3 0 01-3 3h0a3 3 0 01-3-3V39.33h0z"
            ></path>
            <path
              fill="#efd3b4"
              stroke="#5f363a"
              d="M22 39.33h-9.55a2 2 0 01-2-2V24.82c0-14.92 6.14-18.75 10.22-20.38a1 1 0 011.33.94z"
            ></path>
            <path
              fill="#fffaf0"
              stroke="#5f363a"
              d="M47.55 39.33h6v17.39a3 3 0 01-3 3h0a3 3 0 01-3-3V39.33h0z"
            ></path>
            <path
              fill="#efd3b4"
              stroke="#5f363a"
              d="M38.53 4.28h7a8 8 0 018 8v27h0-15a2 2 0 01-2-2v-31a2 2 0 012-2z"
            ></path>
            <circle cx="42.65" cy="10.51" r="2.01" fill="#5f363a"></circle>
          </svg>
        </span>
        <h4 className="text-xl font-extrabold">WeCook</h4>
        <div className=" flex items-center justify-between gap-3">
          {locationDetails !== null ? (
            <div
              className="flex flex-1 items-center gap-1 mr-6 cursor-pointer"
              onClick={() => {
                dispatch(toggleLocationModal());
              }}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  width="24"
                  height="26"
                >
                  <path
                    fill="#fdbf8b"
                    d="M54.01 58.74C54.01 61.65 44.15 64 32 64c-12.15 0-22.01-2.35-22.01-5.26 0-2.6 7.9-4.74 18.26-5.18h7.5c10.37.44 18.26 2.58 18.26 5.18z"
                    className="colore3e2e1 svgShape"
                  ></path>
                  <path
                    fill="#e87d23"
                    d="M32 0C20.7 0 11.54 9.15 11.54 20.45 11.54 31.75 32 58.74 32 58.74s20.45-26.99 20.45-38.29S43.3 0 32 0zm0 33.99c-7.48 0-13.54-6.06-13.54-13.54S24.52 6.91 32 6.91c7.48 0 13.54 6.06 13.54 13.54S39.48 33.99 32 33.99z"
                    className="colore82327 svgShape"
                  ></path>
                </svg>
              </span>
              <span className="font-semibold text-sm text-orange-500 underline underline-offset-[6px]">
                {locationDetails[0]?.address_components[1]?.short_name},
              </span>
              <span className="text-[0.85rem] pl-0.5 font-medium text-gray-600">
                {locationDetails[0]?.address_components[2]?.short_name}
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="flex items-center gap-10">
        <Link
          to="/"
          className="flex items-center gap-1 text-gray-500 hover:text-orange-500 "
        >
          Home
        </Link>
        <Link
          to="/search"
          className="flex items-center gap-1 text-gray-500 hover:text-orange-500 "
        >
          <svg
            width="17"
            height="17"
            fill="currentcolor"
            className="_1GTCc"
            viewBox="5 -1 12 25"
          >
            <path d="M17.667 17.14l5.058 5.057L20.923 24l-5.219-5.219a10.15 10.15 0 01-5.507 1.614C4.566 20.395 0 15.829 0 10.197 0 4.566 4.566 0 10.197 0c5.632 0 10.198 4.566 10.198 10.197 0 2.682-1.035 5.122-2.728 6.942zm-7.47.705a7.648 7.648 0 100-15.296 7.648 7.648 0 000 15.296z"></path>
          </svg>
          Search
        </Link>

        <Link
          to={"/cart"}
          className="cursor-pointer flex gap-1 items-center text-gray-500 hover:text-orange-500 "
        >
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
          Cart
        </Link>

        {userDetails ? (
          <div className="flex gap-2 text-gray-500 hover:text-orange-500 cursor-pointer">
            <svg
              class="_1GTCc"
              viewBox="6 0 12 24"
              height="19"
              width="18"
              fill="currentcolor"
            >
              <path d="M11.9923172,11.2463768 C8.81761115,11.2463768 6.24400341,8.72878961 6.24400341,5.62318841 C6.24400341,2.5175872 8.81761115,0 11.9923172,0 C15.1670232,0 17.740631,2.5175872 17.740631,5.62318841 C17.740631,8.72878961 15.1670232,11.2463768 11.9923172,11.2463768 Z M11.9923172,9.27536232 C14.0542397,9.27536232 15.7257581,7.64022836 15.7257581,5.62318841 C15.7257581,3.60614845 14.0542397,1.97101449 11.9923172,1.97101449 C9.93039471,1.97101449 8.25887628,3.60614845 8.25887628,5.62318841 C8.25887628,7.64022836 9.93039471,9.27536232 11.9923172,9.27536232 Z M24,24 L0,24 L1.21786143,19.7101449 L2.38352552,15.6939891 C2.85911209,14.0398226 4.59284263,12.7536232 6.3530098,12.7536232 L17.6316246,12.7536232 C19.3874139,12.7536232 21.1256928,14.0404157 21.6011089,15.6939891 L22.9903494,20.5259906 C23.0204168,20.63057 23.0450458,20.7352884 23.0641579,20.8398867 L24,24 Z M21.1127477,21.3339312 L21.0851024,21.2122487 C21.0772161,21.1630075 21.0658093,21.1120821 21.0507301,21.0596341 L19.6614896,16.2276325 C19.4305871,15.4245164 18.4851476,14.7246377 17.6316246,14.7246377 L6.3530098,14.7246377 C5.4959645,14.7246377 4.55444948,15.4231177 4.32314478,16.2276325 L2.75521062,21.6811594 L2.65068631,22.0289855 L21.3185825,22.0289855 L21.1127477,21.3339312 Z"></path>
            </svg>
            <span className="text-sm font-medium ">{userDetails.userName}</span>
          </div>
        ) : (
          <button
            className="outline-none border-none rounded-lg bg-neutral-800 text-neutral-50 py-1.5 px-4 text-sm font-inter font-semibold cursor-pointer hover:bg-orange-500"
            onClick={() => {
              dispatch(signInModalToggle());
            }}
          >
            Sign in
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
