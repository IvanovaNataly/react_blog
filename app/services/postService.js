
class PostService {
    constructor() {
        this.url = "../data/posts.json";
    }

    getPosts() {
        return fetch(this.url)
            .then(response => response.json())
    }

    setLocalPosts(posts) {
        localStorage.setItem("posts", JSON.stringify(posts));
    }

    getLocalPosts() {
        return JSON.parse(localStorage.getItem("posts"));
    }

    editPost(post) {
        let posts = localStorage
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
