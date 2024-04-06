import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import RestaruantCard from "./RestaruantCard";
import Filters from "./Filters";
import { Link } from "react-router-dom";
import CartNotification from "./CartNotification";

const Restaruants = ({ restaurantsData, filteredResData }) => {
  const [page, setPage] = useState(1);

  const totaloffSet = Math.floor(filteredResData.length / 8);

  if (!restaurantsData) return;
  console.log("page", page);
  console.log("total", totaloffSet);
  console.log(totaloffSet !== page);

  return (
    <section className="mt-20 mb-16">
      <h2 className="md:text-2xl text-xl font-semibold font-poppins ">
        {restaurantsData.title}
      </h2>
      <Filters />
      {/* restaurants container */}
      <div className="grid grid-cols-4 gap-x-4 gap-y-8 my-10">
        {filteredResData.slice(0, page * 8).map((res) => (
          <Link to={`/restaurant/${res.info?.id}`} key={res.info?.id}>
            <RestaruantCard resData={res} />
          </Link>
        ))}
      </div>
      {
        <div className="flex justify-center">
          {totaloffSet !== page && (
            <button
              className=" text-gray-500 font-poppins text-sm font-semibold flex items-center hover:text-orange-500"
              onClick={() => {
                setPage(page + 1);
              }}
            >
              Load more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0"
                ></path>
              </svg>
            </button>
          )}
        </div>
      }
    </section>
  );
};

export default Restaruants;
