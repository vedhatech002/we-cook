import React from "react";
import { useSelector } from "react-redux";

const Restaruants = ({ restaurantsData }) => {
  console.log(restaurantsData);
  if (!restaurantsData) return;

  return (
    <section className="mt-20">
      <h2 className="md:text-2xl text-xl font-semibold font-poppins ">
        {restaurantsData.title}
      </h2>
      {/* restaurants container */}
      <div></div>
    </section>
  );
};

export default Restaruants;
