import { ShimmerThumbnail } from "react-shimmer-effects";
import { ShimmerPostList } from "react-shimmer-effects";

const HomePageShimmer = () => {
  return (
    <div className="px-36 pt-32 ">
      <div className="flex gap-10 ">
        <ShimmerThumbnail height={200} width={300} rounded />
        <ShimmerThumbnail height={200} width={300} rounded />
        <ShimmerThumbnail height={200} width={300} rounded />
      </div>

      <div className="py-20">
        <ShimmerPostList postStyle="STYLE_FOUR" col={3} row={2} gap={30} />
      </div>
    </div>
  );
};

export default HomePageShimmer;
