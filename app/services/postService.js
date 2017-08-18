
class PostService {
    constructor() {
        this.url = "../data/posts.json";
    }

    getPosts() {
      return fetch(this.url)
        .then(response => response.json())
    }
}

module.exports = new PostService();

// let $ = require("jquery");
//
// class PostService {
//
//
//     getPosts(){
//         let posts = $.get(`/api/posts`);
//         return posts;
//     }
//
// }


module.exports = new PostService();
