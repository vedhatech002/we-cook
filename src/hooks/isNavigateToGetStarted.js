import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const isNavigateToGetStarted = () => {
  const navigate = useNavigate();

  const locationDetails = useSelector(
    (store) => store.location.locationDetails
  );

  useEffect(() => {
    if (!locationDetails) {
      navigate("/getStarted");
    }
  }, []);
};

export default isNavigateToGetStarted;
