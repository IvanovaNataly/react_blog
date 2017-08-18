let express = require("express");

let app = express();
let users = require("./usersList");
let allPosts = require("./postsList");

let router = express.Router();

router.route("/users")
    .get((req, res) => {
        res.json(users);
    });

router.route("/users/:id")
    .get((req, res) => {
        let {id} = req.params;
        let [user] = users.filter(user => user.id == id);
        res.json(user);
    });

router.route("/users/:id/posts")
    .get((req, res) => {
        let {id} = req.params;
        let posts = allPosts.filter(post => post.userId == id);
        res.json(posts);
    });


app.use("/api", router);

app.listen(9090);
