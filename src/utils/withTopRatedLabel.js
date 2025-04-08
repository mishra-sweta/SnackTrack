const withTopRatedLabel = (RestaurantCard) => {
  return (props) => (
    <div className="relative">
      <label className="absolute top-0 left-0 bg-black text-yellow-300 px-2 py-1 text-xs rounded-br-md">
        Top Rated
      </label>
      <RestaurantCard {...props} />
    </div>
  );
};

export default withTopRatedLabel;
