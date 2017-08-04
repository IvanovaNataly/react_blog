// const url = './data/posts.json'
//
// class PostService {
//     getPosts() {
//         fetch(url)
//             .then(res => {
//                 if (res.ok) {
//                     console.log(res)
//                     return res;
//                 }
//                 throw new Error("No data!")
//             })
//         console.log("In PostService")
//     }
// }
//
// module.exports = new PostService();
let $ = require ("jquery");

class PostService {
    constructor() {
        this.url = "../data/posts.json";
    }

    getPosts() {
        // let posts = $.get(this.url);
        // return posts;
      return fetch(this.url)
        .then(response => response.json())
    }
}

module.exports = new PostService();
