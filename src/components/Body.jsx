import HeroSection from "./HeroSection";
import { useState, useEffect, useContext } from "react";

import RestaruantCard from "./RestaruantCard";
import appContext from "../utils/appContext";

const Body = () => {
  const { locationDetails, homePageData, setHomeResData } =
    useContext(appContext);

  useEffect(() => {
    if (locationDetails !== null) {
      getResData();
    }
  }, [locationDetails]);

  const getResData = async () => {
    try {
      const res = await fetch(
        `https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D${locationDetails[0]?.geometry?.location?.lat}%26lng%3D${locationDetails[0]?.geometry?.location?.lng}`
      );

      const jsonData = await res.json();

      setHomeResData(jsonData?.data);
      console.log(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  const restroDatas =
    homePageData?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;

  const TopResData = homePageData?.cards.filter(
    (obj) => obj?.card?.card?.id === "top_brands_for_you"
  );
  const whatsOnyourMindData = homePageData?.cards.filter(
    (obj) => obj?.card?.card?.id === "whats_on_your_mind"
  );
  console.log(TopResData);
  console.log(whatsOnyourMindData);
  return locationDetails !== null ? (
    <>
      {homePageData !== null ? (
        <div className=" px-36 py-32">
          <h1 className="text-2xl font-semibold py-6 font-poppins">
            {homePageData?.cards[1]?.card?.card?.header?.title}
          </h1>
          <div className=" snap-mandatory snap-x overflow-x-auto flex gap-6 mt-2">
            {restroDatas?.map((res) => (
              <RestaruantCard key={res.info?.id} resData={res} />
            ))}
          </div>
        </div>
      ) : (
        <div>Loading....</div>
      )}
    </>
  ) : (
    <HeroSection />
  );
};

export default Body;
