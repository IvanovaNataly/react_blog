import * as ACTIONS from './actions';

export function setPosts(posts) {
    return {type: ACTIONS.SET_POSTS, posts}
}