import { useParams } from "react-router-dom";
import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { CDN_IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
//import { addItem } from "../utils/cartSlice";
import { useContext } from "react";
import userContext from "../utils/userContext";

const RestaurantDetails = () => {
  const { id } = useParams();

  const { addItem } = useContext(userContext);

  const menu_data = useRestaurantMenu(id);
  const dispatch = useDispatch();

  console.log("menu_data", menu_data);

  if (menu_data === null) return <Shimmer />;

  const itemCards =
    menu_data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card?.itemCards;

  console.log("itemsCards", itemCards);

  function handleAddItem(item) {
    addItem(item);

    //dispatch(addItem(item));
  }

  return (
    <div className="flex text-center">
      <div className="rest-menu-list">
        {itemCards.map((item) => (
          <div
            data-testid="foodItems"
            key={item.card.info.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{item.card.info.name}</span>
                <span>
                  - ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.name / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
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
              <img
                src={CDN_IMG_URL + item.card.info.imageId}
                className="w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantDetails;
