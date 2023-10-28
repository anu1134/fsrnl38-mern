import { useOnline } from "../utils/useOnline";

const Header = () => {
  const onlineStatus = useOnline();

  return (
    <div className="flex justify-around border border-solid border-black">
      <div className="w-24 h-28">
        <img src="https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg" />
      </div>

      <ul className="flex items-center">
        <li>OnlineStatus: {onlineStatus ? "🟢" : "🔴"}</li>
        <li className="list-none m-2">Home</li>
        <li className="list-none m-2">About Us</li>
        <li className="list-none m-2">Contact Us</li>
      </ul>
    </div>
  );
};

export default Header;

/**
 * Default export ---- export default componentName
 * Default import ---- import componentName from "path"
 * Named export ---- export .....
 * Named import ---- import { } from ""
 */
