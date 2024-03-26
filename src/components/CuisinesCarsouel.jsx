import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { CUISINE_IMG_URL } from "@/utils/constant";

const CuisinesCarsouel = ({ cuisinesData }) => {
  if (!cuisinesData) return;
  return (
    <section className="pb-10 border-b mb-16">
      <Carousel className="w-full ">
        <div className="flex w-full items-start justify-between pb-2">
          <h2 className="md:text-2xl text-xl font-semibold font-poppins ">
            {cuisinesData?.title}
          </h2>
          <div className="mt-2 space-x-3 w-1/12 hidden sm:block ">
            <CarouselPrevious className="mt-2 " />
            <CarouselNext className="mt-2  " />
          </div>
        </div>
        <CarouselContent className="-ml-2">
          {cuisinesData?.cuisines.map((cuisine) => (
            <CarouselItem key={cuisine.id} className="pl-2 basis-1/5 ">
              <div className="p-1">
                <img
                  className="w-[150px]"
                  alt={cuisine?.action?.text}
                  src={CUISINE_IMG_URL + cuisine?.imageId}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default CuisinesCarsouel;
