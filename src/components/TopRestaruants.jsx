import TopRestaruantCard from "./TopRestaruantCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const TopRestaruants = ({ topRes }) => {
  // const topRes = useSelector((store) => store.homepage?.topRestaruants);
  if (!topRes) return;

  return (
    <section className="mt-8">
      <Carousel className="w-full ">
        <div className="flex w-full items-start justify-between pb-2">
          <h2 className="md:text-2xl text-xl font-semibold font-poppins ">
            {topRes?.title}
          </h2>
          <div className="mt-2 space-x-3 w-1/12 hidden sm:block ">
            <CarouselPrevious className="mt-2 " />
            <CarouselNext className="mt-2  " />
          </div>
        </div>
        <CarouselContent className="-ml-2">
          {topRes?.resData.map((res) => (
            <CarouselItem className="pl-2 sm:basis-[90%] md:basis-2/3 lg:basis-2/4 xl:basis-1/3 ">
              <div className="p-1">
                <TopRestaruantCard key={res.info?.id} resData={res} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default TopRestaruants;
