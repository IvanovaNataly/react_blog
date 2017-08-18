let express = require("express");

let app = express();
let posts = require("./posts.js");


let router = express.Router();

router.route("/posts")
    .get((req, res) => {
        res.json(posts) ;
    });
//
// router.route("/users/:id")
//     .get((req, res) => {
//         let {id} = req.params;
//         let [user] = users.filter(user => user.id == id);
//         res.json(user);
//     });
//
// router.route("/users/:id/posts")
//     .get((req, res) => {
//         let {id} = req.params;
//         let posts = allPosts.filter(post => post.userId == id);
//         res.json(posts);
//     });


app.use("/api", router);

app.listen(9090);
