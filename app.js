var express = require('express');
var app = express();
var path = require('path');
var MongoClient = require('mongodb').MongoClient
// viewed at http://localhost:3000
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname + '/login.html'));
});
app.use(express.static(__dirname + '/public'));



MongoClient.connect('mongodb://localhost:27017/animals', function (err, client) {
    if (err) throw err;

    var db = client.db('kfl');

    db.collection('users').find().toArray(function (err, result) {
        if (err) throw err;

        console.log(result);
    })
});

app.listen(3000);
console.log('Listening on port 3000!');
