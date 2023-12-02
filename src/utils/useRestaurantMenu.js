import { REST_MENU_API } from "./constants";
import { useEffect, useState } from "react";

const useRestaurantMenu = (id) => {
  const [menuData, setMenuData] = useState(null);

  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(REST_MENU_API + id, {
      headers: {
        Authorization: `JWT ${accessToken}`,
      },
    });
    const json = await data.json();

    setMenuData(json);

    console.log("json", json);
  };

  return menuData;
};

export default useRestaurantMenu;
