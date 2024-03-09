import { useContext, useEffect, useState } from "react";

import appContext from "../utils/appContext";

const Header = () => {
  const { locationDetails, setIsLocModalOpen } = useContext(appContext);

  return (
    <header
      className={`font-poppins fixed w-full z-10  py-4 flex items-center justify-between xl:px-36 bg-white lg:px-32 md:px-20 sm:px-16 px-12  ${
        locationDetails !== null ? "shadow-lg" : ""
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
        {locationDetails !== null ? (
          <div
            className="flex items-center gap-1 mr-6 cursor-pointer"
            onClick={() => {
              setIsLocModalOpen(true);
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
