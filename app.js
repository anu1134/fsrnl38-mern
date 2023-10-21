/**
 *  Header
 *      Logo
 *      Nav Bar Items (Home , About Us, Contact , Cart)
 *
 *  Body
 *      Search Bar
 *      Restaurant Cards (separate component)
 *
 *  Footer
 *      copyright
 *
 */

import React from "react";
import ReactDOM from "react-dom";
import "./app.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Header = () => {
  return (
    <div className="navBar">
      <div className="logo">
        <img src="https://marketplace.canva.com/EAFpeiTrl4c/1/0/1600w/canva-abstract-chef-cooking-restaurant-free-logo-9Gfim1S8fHg.jpg" />
      </div>

      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

const Body = () => {
  return (
    <>
      <input type="text" />
      <button>Search</button>
      <div className="restaurant-cards">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </>
  );
};

const RestaurantCard = () => {
  return (
    <div className="restaurant-card">
      <img src="https://b.zmtcdn.com/data/pictures/3/103/54c46c94d635df3611741b6252c2236f_o2_featured_v2.jpg?output-format=webp"></img>
      <div className="restaurant-details">
        <div>
          <h2>Veg Gulati</h2>
          <h3>North Indian , Salad</h3>
        </div>
        <div>
          <h3>4.0</h3>
          <h3>Rs600 for one</h3>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return <h1>Footer</h1>;
};

// React Fragments
// Component Composition

function App() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

root.render(<App />);
