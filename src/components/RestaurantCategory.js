import { useState } from "react";
import FoodItem from "./FoodItem";

const RestaurantCategory = ({ menu, showItems, setShowIndex }) => {
  const handleShowList = () => {
    setShowIndex();
  };

  return (
    <div>
      {menu?.card?.card?.title ? (
        <div
          className=" w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 flex justify-between"
          onClick={handleShowList}
        >
          <span className="font-bold text-2xl ">
            {menu?.card?.card?.title}
            {" ("}
            {menu?.card?.card?.categories?.length ||
              menu?.card?.card?.itemCards?.length}
            {")"}
          </span>
          {showItems ? (
            <span className="center">▲</span>
          ) : (
            <span className="center">▼</span>
          )}
        </div>
      ) : null}

      {menu?.card?.card?.categories
        ? menu?.card?.card?.categories?.map((cat, index) => (
            <div key={index}>
              {showItems && (
                <div key={cat?.categoryId}>
                  <span className="font-bold">{cat.title}</span>
                </div>
              )}
              {cat?.itemCards?.map(
                (items) =>
                  showItems && (
                    <FoodItem items={items} key={items?.card?.info?.id} />
                  )
              )}
            </div>
          ))
        : menu?.card?.card?.itemCards?.map(
            (items) =>
              showItems && (
                <FoodItem items={items} key={items?.card?.info?.id} />
              )
          )}
    </div>
  );
};

export default RestaurantCategory;
