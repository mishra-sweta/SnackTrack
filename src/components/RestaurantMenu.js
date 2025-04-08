import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantDetails from "../utils/useRestaurantDetails";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { id } = useParams();

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
          <div key={index}>
            <RestaurantCategory menu={menu} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
