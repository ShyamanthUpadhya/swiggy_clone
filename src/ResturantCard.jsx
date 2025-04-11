export const RestaurantCard = (props) => {
    const { res } = props;
    const { name, cuisines, costForTwo, avgRating, cloudinaryImageId } =
      res?.info;
    return (
      <div className="res-card">
        <img
          className="image"
          alt="kfc"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <div>{costForTwo}</div>
        <div>{avgRating}</div>
      </div>
    );
  };