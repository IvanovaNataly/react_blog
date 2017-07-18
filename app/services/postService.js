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
        let posts = $.get(this.url);
        return posts;
    }
}

module.exports = new PostService();
