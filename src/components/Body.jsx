import CuisinesCarsouel from "./CuisinesCarsouel";
import HeroSection from "./HeroSection";
import Restaruants from "./Restaruants";
import TopRestaruants from "./TopRestaruants";
import useHomePageData from "@/hooks/useHomePageData";
import { useSelector } from "react-redux";

const Body = () => {
  useHomePageData();

  const topRes = useSelector((store) => store.homePage.topRestaruants);
  const cuisinesData = useSelector((store) => store.homePage.cuisines);
  const restaurantsData = useSelector((store) => store.homePage.restaurants);

  return topRes !== null ? (
    <>
      <div className=" xl:px-36 lg:px-32 md:px-22 sm:px-16 px-6 pt-32">
        <CuisinesCarsouel cuisinesData={cuisinesData} />
        <TopRestaruants topRes={topRes} />
        <Restaruants restaurantsData={restaurantsData} />
      </div>
    </>
  ) : (
    <HeroSection />
  );
};

export default Body;
