import { combineReducers } from "redux";
import postReducer from "./postReducer";
import selectedPostReducer from "./selectedPostReducer";

export default combineReducers({
    posts: postReducer,
    selectedPost: selectedPostReducer
})
