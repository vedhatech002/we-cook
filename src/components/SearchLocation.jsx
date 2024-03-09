import { useContext, useState } from "react";
import appContext from "../utils/appContext";
import LocationCard from "./LocationCard";

const SearchLocation = () => {
  const { islocationModalOpen, setIsLocModalOpen } = useContext(appContext);
  const [locations, setLocations] = useState(null);

  const getLocation = (e) => {
    const value = e.target.value;
    if (value.length >= 3) {
      const getData = async () => {
        const res = await fetch(
          `https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmisc%2Fplace-autocomplete%3Finput%3D${value}`
        );
        const jsonData = await res.json();
        // console.log(jsonData.data);
        setLocations(jsonData.data);
      };
      getData();
    }
  };

  return islocationModalOpen !== true ? (
    ""
  ) : (
    <section className=" grid grid-cols-[2fr,1fr] h-screen absolute z-30 w-screen font-Inter ">
      <div
        className="bg-[#1a1a1be6] h-screen"
        onClick={() => {
          setIsLocModalOpen(false);
        }}
      ></div>
      <div className="bg-white shadow-2xl px-8 py-4">
        <div className="my-4 flex items-center justify-between">
          <div className="font-poppins text-lg font-semibold flex items-center gap-3">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                width="32"
                height="30"
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
            <span className="pt-1"> Search by location</span>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              setIsLocModalOpen(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width={18}
              height={18}
            >
              <path
                fill="#232c33"
                d="M437.5 386.6L306.9 256l130.6-130.6c14.1-14.1 14.1-36.8 0-50.9-14.1-14.1-36.8-14.1-50.9 0L256 205.1 125.4 74.5c-14.1-14.1-36.8-14.1-50.9 0-14.1 14.1-14.1 36.8 0 50.9L205.1 256 74.5 386.6c-14.1 14.1-14.1 36.8 0 50.9 14.1 14.1 36.8 14.1 50.9 0L256 306.9l130.6 130.6c14.1 14.1 36.8 14.1 50.9 0 14-14.1 14-36.9 0-50.9z"
                className="color000000 svgShape"
              ></path>
            </svg>
          </div>
        </div>
        <input
          type="text"
          placeholder="Search for area,street name..."
          className="border-[1.8px] border-gray-400 px-4 py-2 w-full rounded-lg outline-none focus:border-[#fdbf8b] placeholder:text-gray-600"
          onChange={getLocation}
        />
        {/* result location */}
        <div className="my-4 mx-2 overflow-y-auto h-[68vh] noScroll">
          {locations !== null
            ? locations.map((location, index) => (
                <LocationCard key={index} locationData={location} />
              ))
            : ""}
        </div>
      </div>
    </section>
  );
};

export default SearchLocation;
