import { CDN_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  console.log("props", props);

  // Object destructuring
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    props.details;

  // template literals

  return (
    <div className="restaurant-card">
      <img src={`${CDN_IMG_URL}${cloudinaryImageId}`}></img>
      <div className="restaurant-details">
        <div>
          <h2>{name}</h2>
          <h3>{cuisines}</h3>
        </div>
        <div>
          <h3>{avgRating}</h3>
          <h3>{costForTwo / 100}</h3>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
