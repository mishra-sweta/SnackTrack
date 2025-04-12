import { useDispatch } from "react-redux";
import { FOOD_ITEM_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const FoodItem = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  //console.log(items);

  return (
    <div
      key={items?.card?.info?.id}
      data-testid="foodItems"
      className="flex bg-gray-100 shadow-md p-4 mb-4 rounded-lg w-6/12 m-auto"
    >
      {/* Left Section: Text Content */}
      <div className="w-9/12 pr-4">
        <span className="font-semibold text-lg">
          {items?.card?.info?.name} - ₹{" "}
          {items?.card?.info?.price / 100 ||
            items?.card?.info?.defaultPrice / 100}
        </span>
        <p className="text-sm text-gray-600 mt-1 break-words">
          {items?.card?.info?.description?.slice(0, 120)}
          {items?.card?.info?.description?.length > 100 && "..."}
        </p>
      </div>

      {/* Right Section: Image */}
      <div className="w-3/12 flex ">
        <div className="absolute ">
          <button
            data-testid="addButton"
            className=" bg-white p-1 rounded text-sm"
            onClick={() => handleAddItem(items)}
          >
            Add +
          </button>
        </div>
        <img
          src={FOOD_ITEM_URL + items?.card?.info?.imageId}
          alt={items?.card?.info?.name}
          className="w-full h-auto rounded-md object-cover justify-end"
        />
      </div>
    </div>
  );
};

export default FoodItem;
