import { cacheSearchSuggestion } from "@/redux/searchSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SuggestionCard from "./SuggestionCard";
import { triggerResult, triggerSuggestion } from "@/redux/searchResultSlice";
import SearchResults from "./SearchResults";

const Searchpage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const showSuggestion = useSelector(
    (store) => store.searchResult.showSuggestion
  );
  const showResult = useSelector((store) => store.searchResult.showResult);
  const locationDetails = useSelector(
    (store) => store.location.locationDetails
  );
  const searchResult = useSelector((store) => store.searchResult.result);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery !== "") {
        if (searchCache[searchQuery]) {
          setSuggestions(searchCache[searchQuery]);
        } else {
          searchSuggestion();
        }
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const searchSuggestion = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=${locationDetails[0]?.geometry?.location?.lat}&lng=${locationDetails[0]?.geometry?.location?.lng}&str=${searchQuery}&trackingId=undefined`
    );

    const json = await response.json();

    console.log("suggestion", json.data.suggestions);
    setSuggestions(json.data.suggestions);
    dispatch(cacheSearchSuggestion({ [searchQuery]: json.data.suggestions }));
  };

  console.log(suggestions);
  return (
    <div className="pt-16  min-h-[100vh] xl:px-36 lg:px-32 md:px-22 sm:px-16 px-6 pb-10">
      <section className="sticky top-16 pt-20 pb-10 bg-white z-20">
        <div className="text-gray-500 relative">
          <input
            className="w-full border-[1.2px] border-gray-400 px-4 py-2 text-[1rem] font-Inter rounded-sm outline-none font-medium"
            type="text"
            placeholder="Search for restaurants and foods"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              dispatch(triggerResult(false));
              dispatch(triggerSuggestion(true));
            }}
          />
          <span className="absolute right-6 top-3">
            <svg
              width="18"
              height="18"
              fill="currentcolor"
              className="_1GTCc"
              viewBox="5 -1 12 25"
            >
              <path d="M17.667 17.14l5.058 5.057L20.923 24l-5.219-5.219a10.15 10.15 0 01-5.507 1.614C4.566 20.395 0 15.829 0 10.197 0 4.566 4.566 0 10.197 0c5.632 0 10.198 4.566 10.198 10.197 0 2.682-1.035 5.122-2.728 6.942zm-7.47.705a7.648 7.648 0 100-15.296 7.648 7.648 0 000 15.296z"></path>
            </svg>
          </span>
        </div>
      </section>
      {showSuggestion && (
        <div className=" space-y-2 ">
          {suggestions.map((suggestion) => (
            <SuggestionCard key={suggestion.cloudinaryId} data={suggestion} />
          ))}
        </div>
      )}
      {showResult && <SearchResults />}
    </div>
  );
};

export default Searchpage;
