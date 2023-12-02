import { CDN_IMG_URL } from "../utils/constants";
import { useContext } from "react";
import userContext from "../utils/userContext";

const RestaurantCard = (props) => {
  // Object destructuring
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageID } =
    props.details;

  console.log("user context", userContext);

  const currentUser = useContext(userContext);

  console.log("context", currentUser);

  // template literals

  return (
    <div className="restaurant-card bg-gray-100 rounded-lg">
      <img
        className="rounded-lg"
        src={`${CDN_IMG_URL}${cloudinaryImageID}`}
      ></img>
      <div className="restaurant-details">
        <div>
          <h2>{name}</h2>
          <h3>{cuisines}</h3>
        </div>
        <div>
          <h3>{avgRating}</h3>
          <h3>{costForTwo}</h3>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
