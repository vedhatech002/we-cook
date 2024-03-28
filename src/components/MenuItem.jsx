import { FOOD_IMG_URL } from "@/utils/constant";

const MenuItem = (props) => {
  const { name, price, defaultPrice, description, imageId } =
    props.data?.card?.info;
  console.log(imageId);
  return (
    <div className="border-b-2 py-6 px-2 grid grid-cols-[3fr,1fr] gap-4">
      <div>
        <h6 className="text-lg font-semibold">{name}</h6>
        <span className="text-sm font-semibold ">
          ₹ {price ? price / 100 : defaultPrice / 100}
        </span>
        <p className="text-xs font-normal text-gray-600 text-left ">
          {description}
        </p>
      </div>
      <div className="relative">
        {imageId && (
          <img
            className="!w-[150px] !h-[110px] rounded object-cover"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
          />
        )}
        <button
          onClick={() => handleAddItem(props.data?.card?.info)}
          className="px-4 py-1 bg-black text-white rounded-md absolute bottom-1 left-5"
        >
          Add +
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
