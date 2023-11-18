import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import TopRatedRestaurants from "./TopRatedRestaurants";
import Shimmer from "./Shimmer";
import { useOnline } from "../utils/useOnline";
import { Link } from "react-router-dom";
import { useContext } from "react";
import userContext from "../utils/userContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  //const { loggedInuser, setUserName } = useContext(userContext);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch("http://localhost:5000/api/restaurants");

    const response = await data.json();

    setFilteredRestaurants(response);
    setAllRestaurants(response);

    // optional chaining

    // console.log(
    //   response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants
    // );

    // setFilteredRestaurants(
    //   response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants
    // );

    // setAllRestaurants(
    //   response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants
    // );
  }

  const online = useOnline();

  if (!online) {
    return <h1>Please check your Internet Connection</h1>;
  }

  function filterRestaurants() {
    const filteredData = allRestaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredRestaurants(filteredData);
  }

  function filterTopRatedRestaurants(restaurants) {
    setFilteredRestaurants(restaurants);
  }

  return (
    <>
      <div class="m-3">
        <div class="relative mb-4 flex w-full flex-wrap items-stretch">
          <input
            type="search"
            class="relative m-0 -mr-0.5 block  min-w-0 flex-none rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon3"
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            class="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            type="button"
            id="button-addon3"
            onClick={filterRestaurants}
          >
            Search
          </button>

          <TopRatedRestaurants
            topRatedRestaurants={filterTopRatedRestaurants}
            filteredRestaurants={filteredRestaurants}
          />

          {/* <input
            className="border border-black"
            onChange={(e) => setUserName(e.target.value)}
          ></input> */}
        </div>
      </div>

      {filteredRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-cards">
          {filteredRestaurants.map((restaurant) => (
            <Link to={`/restaurant/${restaurant._id}`}>
              <RestaurantCard key={restaurant._id} details={restaurant} />
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Body;
