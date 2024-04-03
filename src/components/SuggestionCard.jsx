import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  addSearchResult,
  triggerResult,
  triggerSuggestion,
} from "@/redux/searchResultSlice";

const SuggestionCard = ({ data }) => {
  const dispatch = useDispatch();
  const locationDetails = useSelector(
    (store) => store.location.locationDetails
  );

  const text = data.text;
  const query = text.replaceAll(" ", "%20");

  const getSearchResult = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/restaurants/search/v3?lat=${locationDetails[0]?.geometry?.location?.lat}&lng=${locationDetails[0]?.geometry?.location?.lng}&str=${query}&trackingId=undefined&submitAction=SUGGESTION&queryUniqueId=bd52aa24-315d-fdcb-661a-6eba3e1ad819&metaData=%7B%22type%22%3A%22DISH%22%2C%22data%22%3A%7B%22vegIdentifier%22%3A%22VEG%22%2C%22cloudinaryId%22%3A%22dyhqamt6bjfjwm4pkbat%22%2C%22dishFamilyId%22%3A%22846627%22%2C%22dishFamilyIds%22%3A%5B%22846627%22%5D%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Dish%22%7D`
    );

    const json = await response.json();

    const result = json.data.cards[1].groupedCard.cardGroupMap.DISH.cards;

    const finalResult = result.filter(
      (el) =>
        el.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Dish"
    );

    dispatch(triggerSuggestion(false));
    dispatch(triggerResult(true));
    dispatch(addSearchResult(finalResult));

    // console.log(
    //   "result:",
    //   json.data.cards[1].groupedCard.cardGroupMap.DISH.cards
    // );
  };

  return (
    <div
      className="px-4 py-2 hover:bg-gray-100 rounded-sm cursor-pointer flex items-center gap-6 text-gray-500"
      onClick={getSearchResult}
    >
      <img
        className="w-16 rounded-md"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/${data.cloudinaryId}`}
        alt={data.text}
      />
      <div className=" font-poppins space-y-1">
        <h4 className="font-medium">{data.text}</h4>
        <p className="text-sm capitalize">{data.type}</p>
      </div>
    </div>
  );
};

export default SuggestionCard;
