import { createStore, applyMiddleware, compose } from "redux";

import rootReducer from "./Reducer/rootReducer";
import thunk from "redux-thunk";

// redux middleware
const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
  const { logger } = require("redux-logger");

  middleware.push(logger);
}

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// compose
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default store;
