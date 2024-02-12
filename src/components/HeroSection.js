import image from "../assets/Rectangle.png";
import heroBanner from "../assets/hero-bg.png";
import Button from "./Button";
const HeroSection = (props) => {
  const { handleLocation, value, handleInput } = props;
  return (
    <section className="w-screen pt-36 font-poppins">
      <span className="w-full relative ">
        <img src={heroBanner} />
      </span>
      <div className="absolute top-[5rem] grid grid-cols-2 gap-[12rem] mt-20 ">
        <div className="ml-36 space-y-3">
          <h1 className="text-[3rem] leading-[4rem] font-medium">
            Premium
            <span className="text-[#FC8019] mx-2">
              Restaruants
              <br /> Food
            </span>
            at your
            <br />
            <span className="text-[#FC8019] "> Door Step</span>
          </h1>
          <p className="text-xs font-Inter font-normal ">
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
              value={value}
              v
              className="border-[1.5px] border-zinc-500  rounded-lg outline-none text-zinc-500  px-4 py-1 text-sm w-[20rem] "
              placeholder="Enter your location you looking  "
              onChange={handleInput}
            />
            <Button btnName="Search" handleClick={handleLocation} />
          </div>
        </div>
        <div className="ml-8">
          <img className="w-[250px]" src={image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
