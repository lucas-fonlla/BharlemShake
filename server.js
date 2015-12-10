var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var csv = require('fast-csv');
var port = process.env.PORT || 2096;
var app = express();
var fs = require('fs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});


mongoose.connect('mongodb://10.104.14.112/bharlennshake');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
    console.log("Server connectd to mongodb");
});

var User = require('./models/user');
var Product = require('./models/product');

var router = express.Router();

//users
router.route("/users")

    .post(function (req, res) {
        var user = new User();
        console.log(req.body);
        user.username = req.body.username;
        user.password = req.body.password;
        user.save(function (err) {
            if (err) {
                res.send(err);
            }
            res.json({message: 'User created !'});
        });
    })
    .get(function (req, res) {
        User.find(function (err, users) {
            if (err)
                res.send(err);

            res.json(users);
        });
    });

router.route("/user/addProduct")
    .post(function (req, res) {
        console.log(req.body._id, req.body.product);
        User.findOne({_id: req.body._id}, function (err, doc) {
            doc.products.push(req.body.product);
            doc.save(function (err) {
                if (err)
                    res.send(err);
                res.json(doc);
            });
        });
    });

router.route("/user/removeProduct")
    .post(function (req, res) {
        User.findOne({_id: req.body._id}, function (err, doc) {
            doc.products.remove(req.body.product);
            doc.save(function (err) {
                if (err)
                    res.send(err);
                res.json(doc);
            });
        });
    });

router.route("/user/products")
    .post(function (req, res) {
        User.findOne({username: req.body.username, password: req.body.password}).populate("products").exec(function (err, user) {
            if (err) {
                res.send(err);
            }
            res.json(user.products);
        });
    });

//auth
router.route('/authenticate').post(function (req, res) {
    User.findOne({username: req.body.username, password: req.body.password}, function (err, user) {
        if (err) {
            res.json({
                type: false,
                data: "Error occured: " + err
            });
        } else {
            if (user) {
                res.json({
                    type: true,
                    data: user,
                    token: user.token
                });
            } else {
                res.json({
                    type: false,
                    data: "Incorrect username/password"
                });
            }
        }
    });
});

//products
router.route("/products/:product_id")

    .get(function (req, res) {
        var id = req.params.product_id;
        Product.findById(id, function (err, product) {
            if (err)
                res.send(err);
            res.json(product);
        })
    });

router.route("/products")
    .post(function (req, res) {
        var ref = req.body.ref;
        var name = req.body.name;
        var info = req.body.info;
        var product = new Product();
        product.ref = ref;
        product.name = name;
        product.info = info;
        product.save(function (err) {
            if (err)
                res.send(err);
            res.json({message: "Product created !"});
        });
    })

    .get(function (req, res) {
        Product.find(function (err, products) {
            if (err)
                res.send(err);

            res.json(products);
        });
    });

// Start server

//csv.fromPath("products.csv", {headers: true}).on("data", function (data) {
//    console.log(data);
//}).on("error", function(data)
//{
//    console.log(data);
//});

//parse csv
var fileStream = fs.createReadStream("products.csv", {encoding: 'utf-8'});
app.get('/csv', function (req, res) {

    csv.fromStream(fileStream, {
        headers: ['ref', 'category', 'brand', 'name', 'price', 'img', 'details'],
        delimiter: ';'
    })
        .on("data", function (data) {
            console.error("data", data);
            var product = new Product();
            product.name = data.name;
            product.category = data.category;
            product.img = data.img;
            product.brand = data.brand;
            product.ref = data.ref;
            product.price = data.price;
            product.details = data.details;
            product.save(function (err) {
                if (err)
                    res.send(err);
                res.json({message: "Product added !"});
            });
        })

        .on("end", function () {
            console.log("ok");
        })
});


app.get('/', function (req, res) {
    res.send("Salut");
});

app.use("/api", router);

app.listen(port);

