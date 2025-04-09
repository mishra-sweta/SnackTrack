import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantDetails from "../utils/useRestaurantDetails";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [showIndex, setShowIndex] = useState(0);

  const restaurantDetails = useRestaurantDetails(id);
  const menu = useRestaurantMenu(id);

  if (restaurantDetails === null) return <Shimmer />;

  //console.log(menu);

  return (
    <div className="m-10 text-center">
      <div className="space-y-3">
        <h1 className="font-bold text-4xl">{restaurantDetails.name}</h1>
        <p className="text-xl">
          {restaurantDetails.cuisines.join(", ")} -{" "}
          {restaurantDetails.costForTwoMessage}
        </p>
        {menu?.map((menu, index) => (
          <RestaurantCategory
            key={menu?.card?.card?.title}
            menu={menu}
            showItems={showIndex === index ? true : false}
            setShowIndex={() =>
              setShowIndex(showIndex === index ? null : index)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
