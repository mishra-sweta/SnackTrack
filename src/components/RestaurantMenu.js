import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RES_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const [title, setTitle] = useState("");
  const { id } = useParams();

  const fetchMenu = async () => {
    const menu = await fetch(RES_URL + id);

    const json = await menu.json();

    setRestaurantDetails(json?.data?.cards[2]?.card?.card?.info);

    setTitle(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  if (restaurantDetails === null) return <Shimmer />;

  //console.log(title);

  return (
    <div>
      <div>
        <h1>{restaurantDetails.name}</h1>
        <p>
          {restaurantDetails.cuisines.join(", ")} -{" "}
          {restaurantDetails.costForTwoMessage}
        </p>
        {title?.map((title, index) => (
          <div key={index}>
            <h3>{title?.card?.card?.title}</h3>

            {title?.card?.card?.categories
              ? title?.card?.card?.categories?.map((cat, index) => (
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
              : title?.card?.card?.itemCards?.map((items) => (
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
