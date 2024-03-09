const RestaruantCard = (props) => {
  const { resData } = props;
  //   const {resName, cuisine, avgRating } = resData;
  //   const { deliveryTime } = resData?.sla;\
  const { cuisines } = resData?.info;
  return (
    <div className="min-w-[300px]  font-poppins snap-center">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData?.info?.cloudinaryImageId}`}
        className="w-full h-48 rounded-md object-cover backdrop-blur-sm"
      />
      <div className="mt-1 space-y-1 ml-1">
        <h3 className="text-lg  font-semibold">{resData.info?.name}</h3>

        <span className="flex items-center gap-1">
          <svg
            className="text-orange-600"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="14"
            fill="none"
            viewBox="0 0 21 20"
          >
            <path
              fill="currentcolor"
              d="M20.323 7.043l-6.279-.913L11.238.44a.795.795 0 00-1.42 0L7.013 6.13l-6.279.913a.79.79 0 00-.437 1.35l4.542 4.428-1.073 6.254a.79.79 0 001.147.834l5.616-2.953 5.616 2.953a.79.79 0 001.147-.833l-1.073-6.255 4.543-4.428a.79.79 0 00.23-.453.789.789 0 00-.668-.897z"
              opacity="0.75"
            ></path>
          </svg>
          <p className="text-sm font-semibold">
            {resData.info?.avgRating +
              " • " +
              resData.info?.sla?.deliveryTime +
              "mins"}
          </p>
        </span>

        <h4 className="text-sm mt-1 font-medium text-gray-500">
          {cuisines.length < 4
            ? cuisines.join(",")
            : (cuisines[0], cuisines[1], cuisines[2], cuisines[3] + "....")}
        </h4>
        <span className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="16"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              fill="#FC8019"
              d="M3.614 3.904a2.65 2.65 0 115.302 0 2.65 2.65 0 01-5.302 0zM6.265.048a3.855 3.855 0 100 7.711 3.855 3.855 0 000-7.71zm6.988 4.82a1.687 1.687 0 113.374 0 1.687 1.687 0 01-3.374 0zm1.687-2.892a2.892 2.892 0 100 5.783 2.892 2.892 0 000-5.783zm0 13.012c-1.049 0-1.89-.17-2.562-.444l.09-.116c.238-.314.42-.628.56-.926.492.171 1.116.281 1.911.281 2.061 0 2.975-.739 3.404-1.364a2.674 2.674 0 00.452-1.29v-.117a.603.603 0 00-.603-.602h-4.764a2.761 2.761 0 00-.605-1.205h5.37A1.807 1.807 0 0120 11.012v.143l-.001.042a3.88 3.88 0 01-.66 1.903c-.688 1-2.003 1.888-4.4 1.888zM1.807 9.205A1.807 1.807 0 000 11.012v.628l.002.047a3.767 3.767 0 00.105.66c.138.542.384 1.052.723 1.499.847 1.116 2.46 2.106 5.435 2.106 2.976 0 4.589-.99 5.435-2.106.339-.447.585-.957.723-1.5.052-.206.079-.38.093-.507a2.66 2.66 0 00.014-.199v-.628a1.808 1.808 0 00-1.807-1.807H1.807zm-.602 2.421v-.614c0-.332.27-.602.602-.602h8.916c.332 0 .602.27.602.602v.614c-.011.143-.034.285-.07.424-.098.387-.274.75-.515 1.068-.57.752-1.788 1.629-4.475 1.629-2.687 0-3.905-.877-4.475-1.629a2.98 2.98 0 01-.515-1.067 2.506 2.506 0 01-.07-.425z"
              opacity="0.75"
            ></path>
          </svg>
          <p className="font-medium "> {resData.info?.costForTwo}</p>
        </span>
      </div>
    </div>
  );
};
export default RestaruantCard;
