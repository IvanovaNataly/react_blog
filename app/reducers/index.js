import { combineReducers } from "redux";
import postReducer from "./postReducer";
import searchReducer from "./searchReducer";
import selectedPostReducer from "./selectedPostReducer";

export default combineReducers({
    posts: postReducer,
    searchedPosts: searchReducer,
    selectedPost: selectedPostReducer
})
