import * as ACTIONS from '../actions/actions';
import postService from '../services/postService';

export default function postReducer(state = [], action) {
        switch(action.type) {
            case ACTIONS.SET_POSTS_REQUEST:
                return state;
            case ACTIONS.SET_POSTS_RESPONSE:
                postService.setLocalPosts(action.posts);
                return action.posts.posts;
            case ACTIONS.SET_POSTS_LOCAL:
                return action.localPosts.posts;
            case ACTIONS.ADD_POST:
                postService.setLocalPosts({posts: [action.newPost, ...state]});
                return [action.newPost, ...state]
    }
    return state;
}

