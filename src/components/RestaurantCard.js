import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData;

  const deliveryTime = resData.sla.deliveryTime;

  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h3 className="res-name">{name}</h3>
      <p className="res-cuisine">{cuisines.join(", ")}</p>
      <p className="res-rating">{avgRating}</p>
      <p className="res-cost">{costForTwo}</p>
      <p className="res-delivery">{deliveryTime} minutes</p>
    </div>
  );
};

export default RestaurantCard;
