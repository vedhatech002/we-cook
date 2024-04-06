import FoodResultCard from "./FoodResultCard";
import { useSelector } from "react-redux";
import { useState } from "react";
import ResResultCard from "./ResResultCard";

const DishResult = () => {
  const resultDatas = useSelector((store) => store.searchResult.result);
  const [visibleCards, setVisibleCards] = useState(10);
  const loadMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 10); // Show next 10cards
  };

  return (
    <div className="bg-gray-200 ">
      <div className="bg-gray-200 px-8 py-8 grid grid-cols-2 gap-8 pt-20">
        {resultDatas.slice(0, visibleCards).map((result) => (
          <FoodResultCard
            key={result.card.card?.info?.id}
            data={result.card.card}
          />
        ))}
      </div>
      {visibleCards < resultDatas.length && (
        <button
          className="bg-slate-950 text-white font-semibold text-sm px-4 py-1.5 mb-12 rounded-lg  mx-[26.9rem]"
          onClick={loadMore}
        >
          Load More
        </button>
      )}
    </div>
  );
};

const RestaruantResult = () => {
  const resultDatas = useSelector((store) => store.searchResult.result);
  const [visibleCards, setVisibleCards] = useState(10);
  const loadMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 10); // Show next 10cards
  };
  return (
    <div className="bg-gray-200">
      <div className="bg-gray-200 px-8 py-8 grid grid-cols-2 gap-8 pt-20 w-full">
        {resultDatas.slice(0, visibleCards).map((result) => (
          <ResResultCard
            key={result.card.card?.restaurant?.info.id}
            data={result.card.card}
          />
        ))}
      </div>
      <button
        className="bg-slate-950 text-white font-semibold text-sm px-4 py-1.5 mb-12 rounded-lg  mx-[26.9rem]"
        onClick={loadMore}
      >
        Load More
      </button>
    </div>
  );
};

const SearchResults = () => {
  const [activeTab, setActiveTab] = useState("dishes");

  return (
    <section>
      <div
        className="flex gap-3 z-20 fixed bg-white font-poppins text-sm font-semibold w-full py-3"
        onClick={(e) => {
          if (e.target.id) {
            setActiveTab(e.target.id);
            console.log(e.target.id);
          }
        }}
      >
        <button
          id="restaurants"
          className={
            "px-4 py-1  rounded-lg " +
            (activeTab === "restaurants"
              ? " bg-slate-950 text-white "
              : "border-[1.5px] border-gray-400 text-gray-600")
          }
        >
          Resturant
        </button>
        <button
          id="dishes"
          className={
            "px-4 py-1.5  rounded-lg " +
            (activeTab === "dishes"
              ? " bg-slate-950 text-white "
              : "border-[1.5px] border-gray-400 text-gray-600")
          }
        >
          Dishes
        </button>
      </div>
      {activeTab === "dishes" ? <DishResult /> : <RestaruantResult />}
    </section>
  );
};

export default SearchResults;
