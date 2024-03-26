import image from "../assets/Rectangle.png";
import heroBanner from "../assets/hero-bg.png";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { toggleLocationModal } from "@/redux/locationSlice";
const HeroSection = (props) => {
  const dispatch = useDispatch();

  const toggleModal = () => {
    dispatch(toggleLocationModal());
  };
  return (
    <section className=" 2xl:py-56 xl:py-36 lg:py-36 md:py-36 py-36 font-poppins ">
      <div className="w-full relative ">
        <img className="w-full sm:block hidden  " src={heroBanner} />
      </div>
      <div className="absolute 2xl:top-[8rem] xl:top-[5rem] lg:top-[4rem] md:top-[3rem] top-[2rem] grid md:grid-cols-[1.5fr,1fr]  mt-20 ">
        <div className="2xl:ml-44  xl:ml-36 lg:ml-32 md:ml-24 sm:ml-20  mx-14 2xl:space-y-6 xl:space-y-6 md:space-y-4 space-y-3">
          <h1 className="2xl:text-[4rem] xl:text-[3rem] lg:text-[2.2rem] md:text-[2rem] sm:text-[1.5rem] 2xl:leading-[5rem] xl:leading-[4rem] lg:leading-[3rem] md:leading-[2.6rem] font-medium">
            Premium
            <span className="text-[#FC8019] mx-2">
              Restaruants
              <br /> Food
            </span>
            at your
            <br />
            <span className="text-[#FC8019] "> Door Step</span>
          </h1>
          <p className="xl:text-sm lg:text-xs md:text-[10px] text-[10px] font-Inter font-normal w-[80%]">
            Experience the pinnacle of culinary excellence without leaving your
            home with Premium Restaurants, Food at Your Doorstep. Indulge in the
            finest cuisines from top-rated restaurants, carefully curated and
            delivered straight to your doorstep.
          </p>
          {/* input */}
          <div className="flex items-center gap-3">
            <input
              type="text"
              name="search-location"
              id="search-location"
              className="border-[1.5px] border-zinc-500  rounded-lg outline-none text-zinc-500  px-4 py-1 text-sm w-[20rem] "
              placeholder="Enter your location you looking  "
              // onChange={handleInput}
              onFocus={toggleModal}
            />
            <Button btnName="Get Started" handleClick={toggleModal} />
          </div>
        </div>
        <div className="ml-8 md:block hidden">
          <img
            className="2xl:w-[290px] xl:w-[250px] md:mr-4 lg:w-[200px] md:w-[180px]"
            src={image}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
