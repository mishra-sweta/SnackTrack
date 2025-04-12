import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData;

  const deliveryTime = resData.sla.deliveryTime;
  // console.log(resData);

  return (
    <div className="rescard-style" data-testid="resCard">
      <img className="w-full h-[250px]" src={CDN_URL + cloudinaryImageId} />
      <h3 className="text-[20px] font-bold">{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>Rating - {avgRating}</p>
      <p>{costForTwo}</p>
      <p>Delivery in - {deliveryTime} minutes</p>
    </div>
  );
};

export default RestaurantCard;
