var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 2096;
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


mongoose.connect('mongodb://10.104.14.112/bharlennshake');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    console.log("Server connectd to mongodb");
});

var User = require('./models/user');

var router = express.Router();

router.route("/users")

    .post(function (req, res) {
        var user = new User();
        console.log(req.body);
        user.username = req.body.username;
        user.save(function (err) {
            if (err) {
                res.send(err);
            }
            res.json({message: 'User created !'});
        });
    })
    .get(function (req, res) {
       User.find(function (err, bears) {
            if (err)
                res.send(err);

            res.json(bears);
        });
    });

// Start server

app.get('/', function (req, res) {
    res.send("Salut");
});

app.use("/api", router);

app.listen(port);

