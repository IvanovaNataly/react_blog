import * as ACTIONS from './actions';
import postService from '../services/postService';

export function setPosts() {
  return dispatch => {
    dispatch( { type: ACTIONS.SET_POSTS_REQUEST} );

    let localPosts = postService.getLocalPosts();
    if(localPosts) {
        return dispatch( { type: ACTIONS.SET_POSTS_LOCAL, localPosts} )
    }

    postService.getPosts()
      .then( posts => dispatch( { type: ACTIONS.SET_POSTS_RESPONSE, posts} ) )
  }
}

export function postSelected(post) {
    return { type: ACTIONS.SET_SELECTED_POST, post}
}

export function editPosts(editedPost, previousPostTitle) {
    let localPosts = postService.editPost(editedPost, previousPostTitle);
    return {type: ACTIONS.SET_POSTS_LOCAL, localPosts}
}

export function addPost(newPost) {
    return {type: ACTIONS.ADD_POST, newPost}
}
