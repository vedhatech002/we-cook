import {
  addRestaurantDetails,
  addRestaurantMenu,
} from "@/redux/restaurantSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useRestaruantMenu = (id) => {
  const locationDetails = useSelector(
    (store) => store.location.locationDetails
  );
  const dispatch = useDispatch();

  const getRestaruantDetails = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${locationDetails[0]?.geometry?.location?.lat}&lng=${locationDetails[0]?.geometry?.location?.lng}&restaurantId=${id}`
    );

    const jsonData = await response.json();
    console.log(jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
    const menuDatas =
      jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (menu) => typeof menu.card?.card.itemCards !== "undefined"
      );
    console.log(menuDatas);
    dispatch(addRestaurantDetails(jsonData.data?.cards[2]?.card?.card?.info));
    dispatch(addRestaurantMenu(menuDatas));
  };

  useEffect(() => {
    console.log("useResEffectCalled");
    getRestaruantDetails();
  }, [id]);
};

export default useRestaruantMenu;
