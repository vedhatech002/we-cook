import { useEffect, useState } from "react";
import useIsScrolled from "../utils/useIsScrolled";

const Header = (props) => {
  const { handleLocation, value, handleInput } = props;

  const top = useIsScrolled();
  return (
    <header
      className={`font-poppins fixed w-full z-10  py-4 flex items-center justify-between xl:px-36 bg-white lg:px-32 md:px-20 sm:px-16 px-12  ${
        !top && "shadow-xl"
      }`}
    >
      <div className="logo flex items-center gap-2">
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
      </div>
      <div className=" flex items-center justify-between gap-3">
        {/* <div className=" relative md:block hidden">
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
            className="absolute top-[6px] right-3 cursor-pointer"
            onClick={handleLocation}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 21 21"
            >
              <path
                stroke="gray"
                strokeLinecap="round"
                strokeWidth="2"
                d="M1 20l4.486-4.494M3 9.5a8.5 8.5 0 1017 0 8.5 8.5 0 00-17 0v0z"
              ></path>
            </svg>
          </span>
        </div> */}

        <div className="cursor-pointer">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="none"
              viewBox="0 0 30 31"
            >
              <path
                stroke="#202020"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19.286 14.428V7.881c0-1.39-.508-2.722-1.413-3.704-.904-.982-2.13-1.534-3.409-1.534s-2.505.552-3.409 1.534c-.904.982-1.412 2.315-1.412 3.704v6.547"
              ></path>
              <rect
                width="18.357"
                height="18.357"
                x="5.286"
                y="10.071"
                stroke="#202020"
                strokeWidth="2"
                rx="3.6"
              ></rect>
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
