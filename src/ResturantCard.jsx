const RestaurantCard = ({ res }) => {
  // const { res } = props;
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId } =
    res?.info;
  return (
    <div className="w-48 h-80 rounded-2xl bg-gray-200 m-4 hover:bg-gray-400">
      <img
        className="w-48 h-36 rounded-2xl"
        alt="kfc"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3 className="w-48">{name}</h3>
      <h4 className="w-48">{cuisines.join(", ")}</h4>
      <div>{costForTwo}</div>
      <div>{avgRating}</div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute mx-7 my-1 text-gray-50 bg-black rounded-lg ">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
