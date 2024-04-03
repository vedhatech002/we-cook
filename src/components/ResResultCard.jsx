const ResResultCard = ({ data }) => {
  return (
    <div className="bg-white font-poppins px-4 py-6 rounded-xl shadow flex items-center gap-6">
      <div>
        <img
          className="w-24 h-20 rounded-md"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
            data.restaurant?.info?.cloudinaryImageId
          }
        />
      </div>
      <div className="space-y-1">
        <h6 className="text-sm text-gray-600 font-semibold">
          {data.restaurant?.info?.name}
        </h6>
        <p className="flex items-center gap-1 text-xs font-medium">
          <span>
            <svg
              className="text-orange-600"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="none"
              viewBox="0 0 21 20"
            >
              <path
                fill="currentcolor"
                d="M20.323 7.043l-6.279-.913L11.238.44a.795.795 0 00-1.42 0L7.013 6.13l-6.279.913a.79.79 0 00-.437 1.35l4.542 4.428-1.073 6.254a.79.79 0 001.147.834l5.616-2.953 5.616 2.953a.79.79 0 001.147-.833l-1.073-6.255 4.543-4.428a.79.79 0 00.23-.453.789.789 0 00-.668-.897z"
                opacity="0.75"
              ></path>
            </svg>
          </span>
          <span className="text-gray-500">
            {data.restaurant?.info?.avgRating}
            <span className="px-1">.</span>
            {data.restaurant?.info?.sla?.minDeliveryTime}-
            <span>{data.restaurant?.info?.sla?.maxDeliveryTime} mins</span>
            <span className="px-1">.</span>
            {data.restaurant?.info?.costForTwoMessage}
          </span>
        </p>
        <p className="text-xs font-medium text-gray-500">
          {data.restaurant?.info?.cuisines.length < 4
            ? data.restaurant?.info?.cuisines.join(",")
            : (data.restaurant?.info?.cuisines[0],
              data.restaurant?.info?.cuisines[1],
              data.restaurant?.info?.cuisines[2],
              data.restaurant?.info?.cuisines[3])}
        </p>
      </div>
    </div>
  );
};

export default ResResultCard;
