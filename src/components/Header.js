import { useOnline } from "../utils/useOnline";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext, useState } from "react";
import userContext from "../utils/userContext";
import { CartContext } from "../utils/cartContext";
import Login from "./Login";

const Header = () => {
  const onlineStatus = useOnline();
  const cartItems = useSelector((store) => store.cart.items);
  const currentUser = useContext(userContext);
  const { cart } = useContext(CartContext);
  console.log("cart", cart);

  console.log("logged", currentUser);

  const [visible, setVisible] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  const setLoggedIn = (val) => {
    setIsLoggedIn(val);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem("accessToken");
  };

  return (
    <>
      <div className="flex justify-around border border-solid border-black">
        <div className="w-24 h-28">
          <img src="https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg" />
        </div>

        <ul className="flex items-center">
          <li>OnlineStatus: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="list-none m-2">
            <Link to="/">Home</Link>
          </li>
          <li className="list-none m-2">
            <Link to="/about">AboutUs</Link>
          </li>
          <li className="list-none m-2">
            <Link to="/contact">ContactUs</Link>
          </li>
          <li className="list-none m-2">
            <Link to="/cart">Cart - {cart.length} items</Link>
          </li>
          <li>
            {isLoggedIn ? (
              <button onClick={handleLogout}>Logout</button>
            ) : (
              <button
                className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
                onClick={openModal}
              >
                Login
              </button>
            )}
          </li>
          {/* <li className="px-4">{loggedInUser}</li> */}
        </ul>
      </div>
      <Login
        isVisible={visible}
        onClose={closeModal}
        setLoggedIn={setLoggedIn}
      />
    </>
  );
};

export default Header;

/**
 * Default export ---- export default componentName
 * Default import ---- import componentName from "path"
 * Named export ---- export .....
 * Named import ---- import { } from ""
 */
