// Dependencies
// -----------------------------------------------------
var express         = require('express');
var MongoClient = require('mongodb').MongoClient;
var port            = process.env.PORT || 8002;
var bodyParser      = require('body-parser');
var app             = express();





// Logging and Parsing
app.use(express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.urlencoded({extended: true}));               // parse application/x-www-form-urlencoded
app.use(bodyParser.text());                                     // allows bodyParser to look at raw text
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));  // parse application/vnd.api+json as json


// Connect to the db
/*MongoClient.connect("mongodb://localhost:27017/db2", function(err, db) {
    console.log("connected");
    if (err) {
        return console.dir(err);
    }*/

MongoClient.connect("mongodb://anjumfatima26:alphaplus90@ds015398.mlab.com:15398/heroku_4dw6mr61", function(err, db) {
    if (err) {
        return console.dir(err);
    }



// GET Routes
// --------------------------------------------------------
// Retrieve records for stores in the db according to given input
app.get('/food1', function(req, res){
    console.log("inside get");

    var collection = db.collection('food');

    collection.find({Id:{'$gte': 1, '$lt': 21}},{Id:1,Countries:1,"Energy (kcal/day)":1,"Protein (g/day)":1, "Fats (g/day)":1,"Carbohydrates (g/day)":1,"Gross national income per capita (PPP international $)":1,'Obesity prevalence, men (%)':1,_id:0}).toArray(function(err, items) {
        console.log(items);
        console.log("outside get");
        res.json(items);
    });
});
    app.get('/food2', function(req, res){
        console.log("inside get");

        var collection = db.collection('food');

        collection.find({Id:{'$gte': 20, '$lt': 41}},{Id:1,Countries:1,"Energy (kcal/day)":1,"Protein (g/day)":1, "Fats (g/day)":1,"Carbohydrates (g/day)":1,"Gross national income per capita (PPP international $)":1,'Obesity prevalence, men (%)':1,_id:0}).toArray(function(err, items) {
            console.log(items);
            console.log("outside get");
            res.json(items);
        });
    });


    app.get('/food3', function(req, res){
        console.log("inside get");

        var collection = db.collection('food');

        collection.find({Id:{'$gte': 40, '$lt': 61}},{Id:1,Countries:1,"Energy (kcal/day)":1,"Protein (g/day)":1, "Fats (g/day)":1,"Carbohydrates (g/day)":1,"Gross national income per capita (PPP international $)":1,'Obesity prevalence, men (%)':1,_id:0}).toArray(function(err, items) {
            console.log(items);
            console.log("outside get");
            res.json(items);
        });
    });

    app.get('/food4', function(req, res){
        console.log("inside get");

        var collection = db.collection('food');

        collection.find({Id:{'$gte': 60, '$lt': 81}},{Id:1,Countries:1,"Energy (kcal/day)":1,"Protein (g/day)":1, "Fats (g/day)":1,"Carbohydrates (g/day)":1,"Gross national income per capita (PPP international $)":1,'Obesity prevalence, men (%)':1,_id:0}).toArray(function(err, items) {
            console.log(items);
            console.log("outside get");
            res.json(items);
        });
    });

    app.get('/food5', function(req, res){
        console.log("inside get");

        var collection = db.collection('food');

        collection.find({Id:{'$gte': 80, '$lt': 101}},{Id:1,Countries:1,"Energy (kcal/day)":1,"Protein (g/day)":1, "Fats (g/day)":1,"Carbohydrates (g/day)":1,"Gross national income per capita (PPP international $)":1,'Obesity prevalence, men (%)':1,_id:0}).toArray(function(err, items) {
            console.log(items);
            console.log("outside get");
            res.json(items);
        });
    });


});


// Listen
// -------------------------------------------------------
app.listen(port);
console.log('App listening on port ' + port);
