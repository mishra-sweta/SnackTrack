import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { SWIGGY_API_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API_URL);

    const json = await data.json();
    //console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

    setRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>You're Offline. Check your internet connection</h1>;
  }

  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mx-10">
      <div className="flex m-6 space-x-4">
        <div className="space-x-4">
          <input
            type="text"
            className="border border-black"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="bg-gray-200 text-black px-4 py-2 rounded cursor-pointer"
            onClick={() => {
              const searchFilterRestaurants = restaurants.filter((res) =>
                res.info.name.toLowerCase().includes(search.toLowerCase())
              );
              setFilterRestaurants(searchFilterRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="bg-gray-200 text-black px-4 py-2 rounded cursor-pointer"
          onClick={() => {
            const filteredList = restaurants.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setFilterRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap gap-3">
        {filterRestaurants.map((restaurant) => (
          <Link
            to={`/restaurants/${restaurant.info.id}`}
            key={restaurant.info.id}
            style={{ textDecoration: "none", color: "black" }}
          >
            <RestaurantCard resData={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
