//import { combineReducers } from 'redux';
import * as ACTIONS from '../actions/actions';

export default function postReducer(state = [], action) {
        switch(action.type) {
            case ACTIONS.SET_POSTS:
                return action.posts;
    }
    return state;
}

