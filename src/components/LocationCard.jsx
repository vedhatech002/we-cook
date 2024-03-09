const LocationCard = (props) => {
  console.log(props.locationData);
  const { terms } = props.locationData;

  const filteredAdr = terms.filter((el, index) => index !== 0);
  const locationStr = filteredAdr.map((el) => el.value).join(",");

  return (
    <div className="flex items-start gap-6 border-b w-full border-slate-950  py-4 cursor-pointer ">
      <div className="text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 96 128"
          width={20}
          height={20}
        >
          <g
            fill="currentcolor"
            className="color000000 svgShape"
            data-name="Layer 2"
          >
            <path
              d="M96 48c0 34.912-40.615 75.928-42.342 77.657a8.002 8.002 0 01-11.314 0C40.615 123.927 0 82.912 0 48a48 48 0 0196 0zM48 72a24 24 0 10-24-24 23.999 23.999 0 0024 24z"
              className="color000000 svgShape"
            ></path>
          </g>
        </svg>
      </div>
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-slate-950 hover:text-orange-500">
          {terms[0]?.value}
        </h3>
        <p className="text-gray-400 text-xs mt-1">{locationStr}</p>
      </div>
    </div>
  );
};

export default LocationCard;
