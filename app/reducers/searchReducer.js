import * as ACTIONS from '../actions/actions';

export default function postReducer(state = [], action) {
    switch(action.type) {
        case ACTIONS.SET_SEARCH_POSTS:
            return action.posts.posts;
    }
    return state;
}

