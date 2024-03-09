const Button = ({ handleClick, btnName }) => {
  return (
    <button
      className="outline-none border-none rounded-lg bg-neutral-800 text-neutral-50 py-1.5 px-4 text-sm font-inter font-semibold cursor-pointer hover:bg-orange-500"
      onClick={handleClick}
    >
      {btnName}
    </button>
  );
};

export default Button;
