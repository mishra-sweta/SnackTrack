import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantDetails from "../utils/useRestaurantDetails";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { id } = useParams();

  const restaurantDetails = useRestaurantDetails(id);
  const menu = useRestaurantMenu(id);

  if (restaurantDetails === null) return <Shimmer />;

  //console.log(menu);

  return (
    <div className="m-10">
      <div className="space-y-3">
        <h1 className="font-bold text-4xl">{restaurantDetails.name}</h1>
        <p className="text-xl">
          {restaurantDetails.cuisines.join(", ")} -{" "}
          {restaurantDetails.costForTwoMessage}
        </p>
        {menu?.map((menu, index) => (
          <div key={index}>
            <h3 className="font-bold text-2xl">{menu?.card?.card?.title}</h3>

            {menu?.card?.card?.categories
              ? menu?.card?.card?.categories?.map((cat, index) => (
                  <div key={index}>
                    {cat?.itemCards?.map((items) => (
                      <div key={items?.card?.info?.id}>
                        <ul>
                          <li className="my-2">
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
                      <li className="my-2">
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
