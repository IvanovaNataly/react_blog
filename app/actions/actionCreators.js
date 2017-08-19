import * as ACTIONS from './actions';
import postService from '../services/postService';

export function setPosts(posts) {
  return dispatch => {
    dispatch( { type: ACTIONS.SET_POSTS_REQUEST} );

    postService.getPosts()
      .then( posts => dispatch( { type: ACTIONS.SET_POSTS_RESPONSE, posts} ) )
  }
}

export function postSelected(post) {
    return { type: ACTIONS.SET_SELECTED_POST, post}
}
