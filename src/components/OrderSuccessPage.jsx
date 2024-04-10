import { useNavigate } from "react-router-dom";

const OrderSuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="!bg-gray-200 h-screen flex items-center justify-center">
      <div className="w-4/12 rounded-lg p-8 bg-white shadow-2xl text-2xl flex flex-col items-center justify-center gap-3">
        <img className="w-32" src="/check.png" />
        <h2 className="font-poppins text-lg font-semibold">
          Your order Placed Successfully!..
        </h2>
        <button className="bg-orange-500 text-white text-sm px-4 py-1.5 rounded-md hover:drop-shadow-md font-poppins font-semibold " onClick={()=>{navigate("/")}}>
          Back to Home Page
        </button>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
