import { MENU_API } from "./constants";
import { useEffect, useState } from "react";

const useRestaurantMenu = (id) => {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + id);
    const json = await data.json();

    setMenuData(json);

    console.log("json", json);
  };

  return menuData;
};

export default useRestaurantMenu;
