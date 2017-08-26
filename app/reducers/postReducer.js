//import { combineReducers } from 'redux';
import * as ACTIONS from '../actions/actions';
import postService from '../services/postService';

export default function postReducer(state = [], action) {
        switch(action.type) {
            case ACTIONS.SET_POSTS_REQUEST:
                return state;
            case ACTIONS.SET_POSTS_RESPONSE:
                postService.setLocalPosts(action.posts.posts);
                return action.posts.posts;
            case ACTIONS.SET_POSTS_LOCAL:
                return action.localPosts;
    }
    return state;
}

