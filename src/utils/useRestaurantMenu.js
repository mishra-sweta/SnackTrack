import { MENU_URL } from "../utils/constants";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [menu, setMenu] = useState([]);

  const fetchMenu = async () => {
    const menuData = await fetch(MENU_URL + resId);

    const json = await menuData.json();

    setMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return menu;
};

export default useRestaurantMenu;
