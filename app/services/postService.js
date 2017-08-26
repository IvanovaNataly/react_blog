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
	//
    // editPost(editedPost) {
    //     let posts = this.getLocalPosts();
    //     let index = posts.findIndex(post => post.title === editedPost.title);
    //     posts[index] = editedPost;
    //     this.setLocalPosts(posts);
	//
    //     console.log(this.getLocalPosts());
    // }
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
