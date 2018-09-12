var express = require('express');
var session = require('express-session');
var app = express();
var path = require('path');
var bodyParser = require("body-parser");
var flash = require('req-flash');
var bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
var teams = require('./teams.js');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
    secret: 'user_id',
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
  }));
var MongoClient = require('mongodb').MongoClient;
// viewed at http://localhost:3000
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname + '/login.html'));
});

app.get('/teams', function(req, res) {

    res.json(teams);
});

// GET /logout
app.post('/logout', function(req, res) {
    if (req.session) {
      // delete session object
      req.session.destroy(function(err) {
        if(err) {
          console.log('error');
        } else {
            //redirect to login page
        res.redirect('/login');
        }
      });
    }
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
            //dispaly error message
           // req.flash('userNotExist', 'User does not exist!');

          res.redirect('/');
       }else if (user.email === req.body.email && user.password === req.body.password){
           req.session.user = user;
           console.log('session created');
      console.log('login successful');

      var name= user.name;
      res.status(200).send;
      res.json({"message" : "successfully logged in"})
      res.sendFile(path.join(__dirname + '/profile.html'));
     } else {
       console.log("Credentials wrong");
        //dispaly error message
        // req.flash('authenticationFailed', 'Used id and password does not matched!');
       res.redirect('/');
       res.end("Login invalid");
     }
});
});
});
// middleware function to check for logged-in users
var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_id) {
        res.redirect('/login');
    } else {
        next();
    }
};
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/js'));





app.listen(3000);
console.log('Listening on port 3000!');
