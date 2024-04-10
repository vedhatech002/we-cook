import { ShimmerContentBlock } from "react-shimmer-effects";
import { ShimmerCategoryItem } from "react-shimmer-effects";

const RestaruantShimmer = () => {
  return (
    <div className="px-36 flex flex-col  gap-4 py-32 ">
      <div className="px-4 py-6 border-[4px] border-gray-100 rounded-lg">
        <ShimmerCategoryItem />
      </div>
      <div className="px-4 py-6 border-[4px] border-gray-100 rounded-lg">
        <ShimmerCategoryItem />
      </div>
      <div className="px-4 py-6 border-[4px] border-gray-100 rounded-lg">
        <ShimmerCategoryItem />
      </div>
      <div className="px-4 py-6 border-[4px] border-gray-100 rounded-lg">
        <ShimmerCategoryItem />
      </div>
    </div>
  );
};

export default RestaruantShimmer;
