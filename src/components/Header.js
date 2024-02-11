import { useEffect, useState } from "react";
import useIsScrolled from "../utils/useIsScrolled";

const Header = (props) => {
  const { handleLocation, value, handleInput } = props;

  const top = useIsScrolled();
  return (
    <header
      className={`font-poppins fixed w-full z-10  py-4 flex items-center justify-between px-32 bg-white ${
        !top && "shadow-xl"
      }`}
    >
      <div className="logo flex items-center gap-2">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 64 64"
            id="knife"
            width="26"
            height="26"
          >
            <path
              fill="#fffaf0"
              stroke="#5f363a"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M16,39.33h6a0,0,0,0,1,0,0V56.72a3,3,0,0,1-3,3h0a3,3,0,0,1-3-3V39.33A0,0,0,0,1,16,39.33Z"
            ></path>
            <path
              fill="#efd3b4"
              stroke="#5f363a"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M22,39.33H12.45a2,2,0,0,1-2-2V24.82c0-14.92,6.14-18.75,10.22-20.38A1,1,0,0,1,22,5.38Z"
            ></path>
            <path
              fill="#fffaf0"
              stroke="#5f363a"
              strokeLinecapp="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M47.55,39.33h6a0,0,0,0,1,0,0V56.72a3,3,0,0,1-3,3h0a3,3,0,0,1-3-3V39.33a0,0,0,0,1,0,0Z"
            ></path>
            <path
              fill="#efd3b4"
              stroke="#5f363a"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M38.53,4.28h7a8,8,0,0,1,8,8v27a0,0,0,0,1,0,0h-15a2,2,0,0,1-2-2v-31A2,2,0,0,1,38.53,4.28Z"
            ></path>
            <circle cx="42.65" cy="10.51" r="2.01" fill="#5f363a"></circle>
          </svg>
        </span>
        <h4 className="text-xl font-extrabold">WeCook</h4>
      </div>
      <div className=" flex items-center justify-between gap-3">
        <div className=" relative">
          <input
            type="text"
            name="search"
            id="search"
            value={value}
            className="border-[1.5px] border-zinc-500  rounded-lg outline-none text-zinc-500  pl-4 pr-8 py-1 text-sm w-[20rem] "
            placeholder="Enter your location you looking "
            onChange={handleInput}
          />

          <span
            className="absolute top-2 right-3 cursor-pointer"
            onClick={handleLocation}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hover:text-neutral-800"
            >
              <path
                color="currentcolor"
                id="Vector"
                d="M1 20L5.486 15.506M3 9.5C3 11.7543 3.89553 13.9163 5.48959 15.5104C7.08365 17.1045 9.24566 18 11.5 18C13.7543 18 15.9163 17.1045 17.5104 15.5104C19.1045 13.9163 20 11.7543 20 9.5C20 7.24566 19.1045 5.08365 17.5104 3.48959C15.9163 1.89553 13.7543 1 11.5 1C9.24566 1 7.08365 1.89553 5.48959 3.48959C3.89553 5.08365 3 7.24566 3 9.5V9.5Z"
                stroke="#808080"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>

        <div>
          <span>
            <svg
              width="24"
              height="25"
              viewBox="0 0 30 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Bag">
                <path
                  id="Vector"
                  d="M19.2857 14.4285V7.88092C19.2857 6.49169 18.7777 5.15936 17.8735 4.17702C16.9693 3.19469 15.743 2.64282 14.4643 2.64282C13.1855 2.64282 11.9592 3.19469 11.055 4.17702C10.1508 5.15936 9.64282 6.49169 9.64282 7.88092V14.4285"
                  stroke="#202020"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  id="Rectangle 16"
                  x="5.28577"
                  y="10.0714"
                  width="18.3571"
                  height="18.3571"
                  rx="3.6"
                  stroke="#202020"
                  stroke-width="2"
                />
              </g>
            </svg>
          </span>
        </div>

        <button className="outline-none border-none rounded-lg bg-neutral-800 text-neutral-50 py-1.5 px-4 text-sm font-inter font-semibold cursor-pointer hover:bg-orange-500">
          Sign in
        </button>
      </div>
    </header>
  );
};

export default Header;
