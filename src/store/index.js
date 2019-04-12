import { createStore, applyMiddleware /* compose */ } from "redux";
import thunk from "redux-thunk";
// import logger from "redux-logger";

import reducers from "../reducers";
import initialState from "./initialState";

// const middleware = [thunk, logger];

export default createStore(
    reducers,
    initialState,
    applyMiddleware(thunk),
    // applyMiddleware(...middleware)

);
