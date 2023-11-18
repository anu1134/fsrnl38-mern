import { useParams } from "react-router-dom";
import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { CDN_IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
//import { addItem } from "../utils/cartSlice";
import { useContext } from "react";
import userContext from "../utils/userContext";
import { CartContext } from "../utils/cartContext";

const RestaurantDetails = () => {
  const { id } = useParams();

  const { addToCart } = useContext(CartContext);

  const menu_data = useRestaurantMenu(id);
  const dispatch = useDispatch();

  if (menu_data === null) return <Shimmer />;

  console.log("menuData", menu_data);

  const itemCards = menu_data[0]?.menuItems;

  // const itemCards =
  //   menu_data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
  //     ?.card?.card?.itemCards;

  //console.log("itemsCards", itemCards);

  function handleAddItem(item) {
    addToCart(item);

    //dispatch(addItem(item));
  }

  return (
    <div className="flex text-center">
      <div className="rest-menu-list">
        {itemCards.map((item) => (
          <div
            data-testid="foodItems"
            key={item._id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{item.name}</span>
                <span>
                  - ₹{item.price ? item.price / 100 : item.finalPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item.description}</p>
            </div>
            <div className="w-3/12 p-4">
              <div className="absolute">
                <button
                  className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                  onClick={() => handleAddItem(item)}
                >
                  Add +
                </button>
              </div>
              <img src={CDN_IMG_URL + item.imageID} className="w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantDetails;
