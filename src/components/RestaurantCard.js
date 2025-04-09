import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData;

  const deliveryTime = resData.sla.deliveryTime;
  const username = useContext(UserContext);

  return (
    <div className="rescard-style">
      <img className="w-full h-[250px]" src={CDN_URL + cloudinaryImageId} />
      <h3 className="text-[20px] font-bold">{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>Rating - {avgRating}</p>
      <p>{costForTwo}</p>
      <p>Delivery in - {deliveryTime} minutes</p>
      <p>User - {username.loggedInUser} </p>
    </div>
  );
};

export default RestaurantCard;
