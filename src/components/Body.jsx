import HeroSection from "./HeroSection";
import TopRestaruants from "./TopRestaruants";
import useHomePageData from "@/hooks/useHomePageData";
import { useSelector } from "react-redux";

const Body = () => {
  useHomePageData();

  const topRes = useSelector((store) => store.homePage.topRestaruants);

  // const whatsOnyourMindData = homePageData?.cards.filter(
  //   (obj) => obj?.card?.card?.id === "whats_on_your_mind"
  // );
  // console.log(TopResData);
  // console.log(whatsOnyourMindData);

  return topRes !== null ? (
    <>
      <div className=" xl:px-36 lg:px-32 md:px-22 sm:px-16 px-6 pt-32">
        <TopRestaruants topRes={topRes} />
      </div>
    </>
  ) : (
    <HeroSection />
  );
};

export default Body;
