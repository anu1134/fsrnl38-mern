import { useParams } from "react-router-dom";
import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantDetails = () => {
  const { id } = useParams();

  const menu_data = useRestaurantMenu(id);

  console.log("menu_data", menu_data);

  if (menu_data === null) return <Shimmer />;

  const itemCards =
    menu_data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card?.itemCards;

  console.log("itemsCards", itemCards);

  return (
    <>
      <h1>Restaurant Details</h1>
      <h2> Restaurant Id: {id}</h2>

      {itemCards.map((item) => {
        return <h1>{item.card.info.name}</h1>;
      })}
    </>
  );
};

export default RestaurantDetails;
