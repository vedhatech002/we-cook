import { addTopRestaruants } from "@/redux/homePageSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useHomePageData = () => {
  const locationDetails = useSelector(
    (store) => store.location.locationDetails
  );
  const dispatch = useDispatch();

  const getResData = async () => {
    try {
      const res = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${locationDetails[0]?.geometry?.location?.lat}&lng=${locationDetails[0]?.geometry?.location?.lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING `
      );

      const jsonData = await res.json();
      console.log(jsonData);

      const topResData = jsonData.data?.cards.find(
        (obj) => obj?.card?.card?.id === "top_brands_for_you"
      );

      if (topResData) {
        dispatch(
          addTopRestaruants({
            title: topResData.card?.card?.header?.title,
            resData:
              topResData.card?.card?.gridElements?.infoWithStyle?.restaurants,
          })
        );
      }
      console.log(topResData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(" useEffect called");
    if (locationDetails !== null) {
      getResData();
    }
  }, [locationDetails]);
};

export default useHomePageData;
