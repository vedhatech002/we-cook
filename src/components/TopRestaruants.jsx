import RestaruantCard from "./RestaruantCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const TopRestaruants = (props) => {
  console.log(props);
  const { gridElements } = props.data[0]?.card?.card;
  const { restaurants } = gridElements?.infoWithStyle;
  console.log(restaurants);

  return gridElements ? (
    <section className="mt-8">
      <Carousel className="w-full ">
        <div className="flex w-full items-start justify-between pb-2">
          <h2 className="md:text-2xl text-xl font-semibold font-poppins ">
            {props.data[0]?.card?.card?.header?.title}
          </h2>
          <div className="mt-2 space-x-3 w-1/12 hidden sm:block ">
            <CarouselPrevious className="mt-2 " />
            <CarouselNext className="mt-2  " />
          </div>
        </div>
        <CarouselContent className="-ml-2">
          {restaurants.map((res) => (
            <CarouselItem className="pl-2 sm:basis-[90%] md:basis-2/3 lg:basis-2/4 xl:basis-1/3 ">
              <div className="p-1">
                <RestaruantCard key={res.info?.id} resData={res} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  ) : (
    <h1>Loading</h1>
  );
};

export default TopRestaruants;
