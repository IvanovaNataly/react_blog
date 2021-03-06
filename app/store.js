import { createStore, applyMiddleware } from "redux";
import appReducer from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

const state = {
    posts: [],
    selectedPost: {}
};

let middlewares = applyMiddleware(thunk);

export default createStore(
    appReducer,
    state,
    composeWithDevTools(middlewares)
);


