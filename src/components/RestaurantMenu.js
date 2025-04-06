import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const [menu, setMenu] = useState([]);
  const { id } = useParams();

  const fetchMenu = async () => {
    const menuData = await fetch(MENU_URL + id);

    const json = await menuData.json();

    setRestaurantDetails(json?.data?.cards[2]?.card?.card?.info);

    setMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  if (restaurantDetails === null) return <Shimmer />;

  //console.log(menu);

  return (
    <div>
      <div>
        <h1>{restaurantDetails.name}</h1>
        <p>
          {restaurantDetails.cuisines.join(", ")} -{" "}
          {restaurantDetails.costForTwoMessage}
        </p>
        {menu?.map((menu, index) => (
          <div key={index}>
            <h3>{menu?.card?.card?.title}</h3>

            {menu?.card?.card?.categories
              ? menu?.card?.card?.categories?.map((cat, index) => (
                  <div key={index}>
                    {cat?.itemCards?.map((items) => (
                      <div key={items?.card?.info?.id}>
                        <ul>
                          <li>
                            {items?.card?.info?.name} - Rs{" "}
                            {items?.card?.info?.price / 100 ||
                              items?.card?.info?.defaultPrice / 100}
                          </li>
                        </ul>
                      </div>
                    ))}
                  </div>
                ))
              : menu?.card?.card?.itemCards?.map((items) => (
                  <div key={items?.card?.info?.id}>
                    <ul>
                      <li>
                        {items.card?.info?.name} - Rs{" "}
                        {items.card?.info?.price / 100 ||
                          items.card?.info?.defaultPrice / 100}
                      </li>
                    </ul>
                  </div>
                ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
