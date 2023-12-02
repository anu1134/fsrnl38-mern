import React from "react";
import ReactDOM from "react-dom";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import "./app.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import Profile from "./src/components/Profile";
import RestaurantDetails from "./src/components/RestaurantDetails";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore";
import userContext from "./src/utils/userContext";
import { useState } from "react";
import { CartProvider } from "./src/utils/cartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

// React Fragments
// Component Composition

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile", // /about/profile
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id", // dynamic routing
        element: <RestaurantDetails />,
      },
    ],
  },
]);

function App() {
  const [userName, setUserName] = useState("Anshika");

  return (
    <Provider store={appStore}>
      <userContext.Provider value={{ currentUser: userName, setUserName }}>
        <CartProvider>
          <Header />
          <Outlet />
          <Footer />
        </CartProvider>
      </userContext.Provider>
    </Provider>
  );
}

root.render(<RouterProvider router={appRouter} />);
