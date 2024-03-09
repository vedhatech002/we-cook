import HeroSection from "./HeroSection";
import { useState, useEffect } from "react";
import useSearchRestaruants from "../utils/useSearchRestaruants";
import RestaruantCard from "./RestaruantCard";

const Body = () => {
  const [location, setLocation] = useState("");
  const [finalLocation, setFinalLocation] = useState("");

  // setRestaruantsData();
  const resData = useSearchRestaruants(finalLocation);

  const handleInputValue = (e) => {
    setLocation(e.target.value);
  };

  const getLocation = () => {
    setFinalLocation(location);
  };
  const restroDatas =
    resData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;
  return (
    <>
      {restroDatas ? (
        <div></div>
      ) : (
        <HeroSection
          handleLocation={getLocation}
          value={location}
          handleInput={handleInputValue}
        />
      )}
      {restroDatas ? (
        <div className=" px-36 py-32">
          <h1 className="text-2xl font-semibold py-6 font-poppins">
            {resData?.data?.cards[1]?.card?.card?.header?.title}
          </h1>
          <div className=" snap-mandatory snap-x overflow-x-auto flex gap-6 mt-3">
            {restroDatas?.map((res) => (
              <RestaruantCard key={res.info?.id} resData={res} />
            ))}
          </div>
        </div>
      ) : (
        <div className="hidden"></div>
      )}
    </>
  );
};

export default Body;
