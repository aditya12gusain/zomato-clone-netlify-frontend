import React, { useEffect } from "react";
import FoodTab from "../Components/FoodTabs";
import { useParams } from "react-router";

//Components
import Navbar from "../Components/Navbar";

// Redux
import { useDispatch } from "react-redux";
import { getCart } from "../Redux/Reducer/Cart/cart.action";

function HomeLayout({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, []);

  return (
    <div>
      <Navbar />
      <FoodTab />
      <div className="container mx-auto px-4 lg:px-20">{children}</div>
    </div>
  );
}

export default HomeLayout;
