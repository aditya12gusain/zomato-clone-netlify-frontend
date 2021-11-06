import axios from "axios";

// Redux Types
import { CREATE_ORDER, ORDER_PLACED } from "./order.type";

export const createOrder = (amount) => async (dispatch) => {
  try {
    const order = await axios({
      method: "POST",
      url: "https://zomato-clone-heroku-backend.herokuapp.com/payments/new",
      data: { amount },
    });

    return dispatch({ type: CREATE_ORDER, payload: order.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};

export const orderPlaced =
  (cartData, razorpay_payment_id) => async (dispatch) => {
    try {
      const placeOrder = cartData.map((foodItem) => {
        const orderDetails = {
          food: foodItem._id,
          quantity: foodItem.quantity,
          paymode: "ONLINE",
          paymentDetails: {
            itemTotal: foodItem.totalPrice,
            promo: 0,
            tax: 0,
            razorpay_payment_id,
          },
        };
        axios({
          method: "POST",
          url: `https://zomato-clone-heroku-backend.herokuapp.com/order/new`,
          data: { orderDetails },
        });
      });

      await Promise.all(placeOrder);

      return dispatch({ type: ORDER_PLACED, payload: {} });
    } catch (error) {
      return dispatch({ type: "ERROR", payload: error });
    }
  };
