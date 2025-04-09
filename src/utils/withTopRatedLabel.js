const withTopRatedLabel = (RestaurantCard) => {
  return (props) => (
    <div className="relative">
      <label className="absolute top-0 left-0 bg-black text-white px-2 py-1 text-xs rounded">
        Top Rated
      </label>
      <RestaurantCard {...props} />
    </div>
  );
};

export default withTopRatedLabel;
