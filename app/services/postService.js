const localStItem = "posts";


class PostService {
    constructor() {
        this.url = "../data/posts.json";
    }

    getPosts() {
        return fetch(this.url)
            .then(response => response.json())
    }

    setLocalPosts(posts) {
        localStorage.setItem(localStItem, JSON.stringify(posts));
    }

    getLocalPosts() {
        return JSON.parse(localStorage.getItem(localStItem));
    }

    editPost(editedPost, previousPostTitle) {
        let postsObj = this.getLocalPosts();
        let index = postsObj.posts.findIndex(post => post.title === previousPostTitle);
        postsObj.posts[index] = editedPost;
        this.setLocalPosts(postsObj);
        return postsObj;
    }
}

module.exports = new PostService();

//
//
// class PostService {
//
//
//     getPosts(){
//         return fetch (`/api/posts`)
//             .then(response => console.log(response.json()))
//     }
//
// }
//
//
// module.exports = new PostService();
