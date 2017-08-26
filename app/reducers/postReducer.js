//import { combineReducers } from 'redux';
import * as ACTIONS from '../actions/actions';

export default function postReducer(state = [], action) {
        switch(action.type) {
            case ACTIONS.SET_POSTS_REQUEST:
                return state;
            case ACTIONS.SET_POSTS_RESPONSE:
                let postString = JSON.stringify(action.posts.posts);
                localStorage.setItem("posts", postString);
                return action.posts.posts;
    }
    return state;
}

