import HeroSection from "./HeroSection";
import { useState, useEffect, useContext } from "react";

import RestaruantCard from "./RestaruantCard";
import appContext from "../utils/appContext";
import TopRestaruants from "./TopRestaruants";

const Body = () => {
  const { locationDetails, homePageData, setHomeResData } =
    useContext(appContext);
  const [homePageResData, setHomePageResData] = useState(null);
  const [location, setLocation] = useState(locationDetails);
  useEffect(() => {
    console.log(" useEffect called");
    if (locationDetails !== null) {
      getResData();
    }
  }, [locationDetails]);

  const getResData = async () => {
    try {
      const res = await fetch(
        `https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D${locationDetails[0]?.geometry?.location?.lat}%26lng%3D${locationDetails[0]?.geometry?.location?.lng}%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING`
      );

      const jsonData = await res.json();

      setHomeResData(jsonData?.data);
      // setHomePageResData(jsonData?.data)
      console.log(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(homePageData);
  const restroDatas =
    homePageData?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;

  const TopResData = homePageData?.cards.filter(
    (obj) => obj?.card?.card?.id === "top_brands_for_you"
  );
  console.log(TopResData);
  const whatsOnyourMindData = homePageData?.cards.filter(
    (obj) => obj?.card?.card?.id === "whats_on_your_mind"
  );
  console.log(TopResData);
  console.log(whatsOnyourMindData);
  return locationDetails !== null ? (
    <>
      {TopResData ? (
        <div className=" xl:px-36 lg:px-32 md:px-22 sm:px-16 px-6 py-32">
          <TopRestaruants data={TopResData} />
        </div>
      ) : (
        <h1 className="py-32">Loading</h1>
      )}
    </>
  ) : (
    <HeroSection />
  );
};

export default Body;
