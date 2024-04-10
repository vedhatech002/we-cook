import { addFastDelivery, addFilteredRes } from "@/redux/filteredResSlice";
import CuisinesCarsouel from "./CuisinesCarsouel";
import HeroSection from "./HeroSection";
import Restaruants from "./Restaruants";
import TopRestaruants from "./TopRestaruants";
import useHomePageData from "@/hooks/useHomePageData";
import { useDispatch, useSelector } from "react-redux";
import isNavigateToGetStarted from "@/hooks/isNavigateToGetStarted";
import HomePageShimmer from "./Shimmers/HomePageShimmer";

const Body = () => {
  isNavigateToGetStarted();
  useHomePageData();

  const topRes = useSelector((store) => store.homePage.topRestaruants);
  const cuisinesData = useSelector((store) => store.homePage.cuisines);
  const restaurantsData = useSelector((store) => store.homePage.restaurants);
  const filteredRes = useSelector((store) => store.filteredRes.filteredRes);

  return restaurantsData ? (
    <>
      <div className=" xl:px-36 lg:px-32 md:px-22 sm:px-16 px-6 pt-32">
        <CuisinesCarsouel cuisinesData={cuisinesData} />
        <TopRestaruants topRes={topRes} />
        <Restaruants
          restaurantsData={restaurantsData}
          filteredResData={filteredRes}
        />
      </div>
    </>
  ) : (
    <HomePageShimmer />
  );
};

export default Body;
