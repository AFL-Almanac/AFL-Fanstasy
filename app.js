var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
var MongoClient = require('mongodb').MongoClient
// viewed at http://localhost:3000
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname + '/login.html'));
});
app.post('/login_user', function (req, res) {
    var email = req.body.email;
    var passw=req.body.password;

    MongoClient.connect('mongodb://localhost:27017', function (err, client) {
    if (err) throw err;

    var db = client.db('kfl');

   
    db.collection('user-login').findOne({ email:req.body.email}, function(err, user) {
        console.log(email)
        if(user ===null){
            console.log('user does not exist');
          res.end("Login invalid");
       }else if (user.email === req.body.email && user.password === req.body.password){
      console.log('login successful');
      var name= user.name;
      res.send('welcome '+name);
     } else {
       console.log("Credentials wrong");
       res.end("Login invalid");
     }
});
});
});
app.use(express.static(__dirname + '/public'));





app.listen(3000);
console.log('Listening on port 3000!');