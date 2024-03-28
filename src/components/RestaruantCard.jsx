import { RES_IMG_URL } from "@/utils/constant";

const RestaruantCard = (props) => {
  const { resData } = props;

  return (
    <div className="bg-[#F8F8F8] w-[230px] p-3 rounded-lg  drop-shadow-md cursor-pointer font-poppins relative">
      <img
        className="w-full object-cover h-[180px] rounded-lg"
        src={RES_IMG_URL + resData?.info?.cloudinaryImageId}
        alt="banner"
      />
      <div className="absolute top-[8.5rem]  text-[1rem] font-poppins bg-gradient-to-t  from-black h-14 py-6  font-bold text-white w-[207px] px-3 rounded-b-md">
        {resData.info?.aggregatedDiscountInfoV3?.header && (
          <h2>
            {resData.info?.aggregatedDiscountInfoV3?.header +
              " " +
              resData.info?.aggregatedDiscountInfoV3?.subHeader}
          </h2>
        )}
      </div>
      <div className="mt-2">
        <h4 className="font-medium">
          {" "}
          {resData.info?.name.length < 25
            ? resData.info?.name
            : resData.info?.name.substr(0, 20) + "..."}
        </h4>
        <div className="flex items-center justify-between my-3">
          <span className="text-xs font-medium text-gray-500">
            {resData?.info?.cuisines.length < 4
              ? resData?.info?.cuisines.join(" , ")
              : (resData?.info?.cuisines[0],
                resData?.info?.cuisines[1],
                resData?.info?.cuisines[2])}
          </span>
          <span className="flex items-center gap-1">
            <svg
              className="text-orange-600"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="12"
              fill="none"
              viewBox="0 0 21 20"
            >
              <path
                fill="currentcolor"
                d="M20.323 7.043l-6.279-.913L11.238.44a.795.795 0 00-1.42 0L7.013 6.13l-6.279.913a.79.79 0 00-.437 1.35l4.542 4.428-1.073 6.254a.79.79 0 001.147.834l5.616-2.953 5.616 2.953a.79.79 0 001.147-.833l-1.073-6.255 4.543-4.428a.79.79 0 00.23-.453.789.789 0 00-.668-.897z"
                opacity="0.75"
              ></path>
            </svg>
            <p className="text-xs font-medium mt-1">
              {resData.info?.avgRating}
            </p>
          </span>
        </div>
        <div className="flex items-center justify-between ">
          {/* delivery time */}
          <span className="flex items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="16"
              fill="none"
              viewBox="0 0 22 20"
            >
              <g
                stroke="#FC8019"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                opacity="0.75"
              >
                <path d="M8.901 13.457l2.963.987s7.408-1.481 8.395-1.481c.988 0 .988.988 0 1.975-.987.988-4.444 3.95-7.407 3.95s-4.938-1.48-6.914-1.48H1"></path>
                <path d="M1 11.482c.988-.988 2.963-2.47 4.938-2.47 1.976 0 6.667 1.976 7.408 2.963.74.988-1.482 2.47-1.482 2.47M6.926 6.048V2.1a.988.988 0 01.988-.988h11.851a.988.988 0 01.988.988V10"></path>
                <path d="M11.37 1.111h4.938v4.445H11.37V1.11z"></path>
              </g>
            </svg>
            <p className="text-xs font-medium mt-0.5">
              {resData.info?.sla?.deliveryTime + " Mins"}
            </p>
          </span>
          {/* cost for two */}
          <span className="flex items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
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
            <p className="text-xs font-medium mt-0.5">250 for two</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RestaruantCard;
