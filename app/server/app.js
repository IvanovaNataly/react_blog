let express = require("express");
let bodyParser = require('body-parser');

let app = express();


app.use(bodyParser.urlencoded({extended: true}));

let posts = require("../data/posts");

app.route("/api/posts")
    .get((req, res) => {
        console.log('Requested node server');
        res.json(posts);
})


app.listen(9090);



// let express = require("express");
// let bodyParser = require("body-parser");
//
//
// let app = express();
// app.use(bodyParser.urlencoded({extended: true}));
//
// let posts = require("./posts.js");
//
//
// let router = express.Router();
//
// router.route("/posts")
//     .get((req, res) => {
//         res.json(posts) ;
//     });
//
//
// app.use("/api", router);
//
// app.listen(9090);
