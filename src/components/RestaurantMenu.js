import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RES_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const [foodDetails, setfoodDetails] = useState(null);
  const [title, setTitle] = useState("");
  const { id } = useParams();

  const fetchMenu = async () => {
    console.log(RES_URL + id);

    const menu = await fetch(RES_URL + id);

    const json = await menu.json();
    console.log(json);

    setRestaurantDetails(json?.data?.cards[2]?.card?.card?.info);

    setfoodDetails(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );

    setTitle(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.title
    );
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  if (restaurantDetails === null) return <Shimmer />;

  console.log(restaurantDetails);
  console.log(foodDetails);

  return (
    <div>
      <div>
        <h1>{restaurantDetails.name}</h1>
        <p>
          {restaurantDetails.cuisines.join(", ")} -{" "}
          {restaurantDetails.costForTwoMessage}
        </p>
        <h3>{title}</h3>
        {!foodDetails ? (
          <p>Lul</p>
        ) : (
          foodDetails?.map((food) => (
            <div key={food.card.info.id}>
              <ul>
                {food.card.info.name} - Rs&nbsp;
                {food.card.info.price / 100 ||
                  food.card.info.defaultPrice / 100}
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
