import axios from "axios";

// Redux Reducer Types
import { GET_RESTAURANT, GET_SPECIFIC_RESTAURANT } from "./restaurant.type";

export const getRestaurant = () => async (dispatch) => {
  try {
    const restaurantList = await axios({
      method: "GET",
      url: "https://zomato-clone-heroku-backend.herokuapp.com/restaurant/?city=NCR",
    });

    return dispatch({ type: GET_RESTAURANT, payload: restaurantList.data });
  } catch (error) {
    return console.log(error);
  }
};

export const getSpecificRestaurant = (_id) => async (dispatch) => {
  try {
    const restaurant = await axios({
      method: "GET",
      url: `https://zomato-clone-heroku-backend.herokuapp.com/restaurant/${_id}`,
    });

    return dispatch({
      type: GET_SPECIFIC_RESTAURANT,
      payload: restaurant.data,
    });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
