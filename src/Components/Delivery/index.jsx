import React, { useState, useEffect } from "react";
import RestaurantCard from "../RestaurantCard";
import DeliveryCarousel from "./DeliveryCarousel";

// Redux
import { useSelector } from "react-redux";

function Delivery() {
  const [restaurantList, setRestaurantList] = useState([]);

  const reduxState = useSelector(
    (globalStore) => globalStore.restaurant.restaurants
  );

  useEffect(() => {
    reduxState.restaurants && setRestaurantList(reduxState.restaurants);
    console.log(reduxState.restaurants);
  }, [reduxState.restaurants]);

  return (
    <>
      <DeliveryCarousel />
      <div className="flex justify-between flex-wrap my-10">
        {restaurantList.map((restaurant) => (
          <RestaurantCard {...restaurant} key={restaurant._id} />
        ))}
      </div>
    </>
  );
}

export default Delivery;
