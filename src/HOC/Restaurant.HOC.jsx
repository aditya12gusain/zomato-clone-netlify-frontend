import React from "react";
import { Route } from "react-router-dom";

// Layout
import RestaurantLayout from "../Layout/Restaurant.layout";

function RestaurantLayoutHOC({ component: Component, ...rest }) {
  return (
    <>
      <Route
        {...rest}
        component={(props) => (
          <RestaurantLayout>
            <Component {...props} />
          </RestaurantLayout>
        )}
      />
    </>
  );
}

export default RestaurantLayoutHOC;
