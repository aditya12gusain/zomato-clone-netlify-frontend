import axios from "axios";

// Redux Types
import { GET_IMAGE } from "./Image.type";

export const getImage = (_id) => async (dispatch) => {
  try {
    const Image = await axios({
      method: "GET",
      url: `https://zomato-clone-heroku-backend.herokuapp.com/image/${_id}`,
    });
    return dispatch({ type: GET_IMAGE, payload: Image.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
