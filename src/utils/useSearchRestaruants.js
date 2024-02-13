import { useEffect, useState } from "react";

const useSearchRestaruants = (location) => {
  const [restaruantsData, setRestaruantsData] = useState(null);

  const fetchPlaceId = async () => {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/misc/place-autocomplete?input=${location}`
      );

      const jsonData = await data.json();

      fetchGeoLocation(jsonData?.data[0]?.place_id);
    } catch (err) {
      // console.log(err);
    }
  };

  const fetchGeoLocation = async (place_id) => {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/misc/address-recommend?place_id=${place_id}`
      );

      const jsonData = await data.json();
      fetchRestaruants(jsonData?.data[0]?.geometry?.location);
    } catch (err) {
      console.error(err);
    }
  };
  const fetchRestaruants = async (locationObj) => {
    try {
      const { lat, lng } = locationObj;
      const resData = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}`
      );

      const resJsonData = await resData.json();
      setRestaruantsData(resJsonData);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchPlaceId();
  }, [location]);

  if (location === "") {
    return null;
  }
  return restaruantsData;
};

export default useSearchRestaruants;
