import { MENU_URL } from "../utils/constants";
import { useEffect, useState } from "react";

const useRestaurantDetails = (resId) => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);

  const fetchRestaurantDetails = async () => {
    const resData = await fetch(MENU_URL + resId);

    const json = await resData.json();

    setRestaurantDetails(json?.data?.cards[2]?.card?.card?.info);
  };

  useEffect(() => {
    fetchRestaurantDetails();
  }, []);

  return restaurantDetails;
};

export default useRestaurantDetails;
