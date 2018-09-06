var express = require('express');
var session = require('express-session');
var app = express();
var path = require('path');
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');

var bcrypt = require('bcrypt');

const flash = require('express-flash-notification');
const saltRounds = 10;
var crypto    = require('crypto'), hmac, signature;
const { check, validationResult } = require('express-validator/check');
var getHash = ( pass , key ) => {
				
    var hmac = crypto.createHmac('kfl18', key);
    
    //passing the data to be hashed
    data = hmac.update(pass);
    //Creating the hmac in the required format
    gen_hmac= data.digest('hex');
    //Printing the output on the console
    console.log("hmac : " + gen_hmac);
    return gen_hmac;
}


app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(session({
    key: 'user_id',
    secret: 'somerandonstuffs',
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
  }));
  app.use(flash(app));
  
var MongoClient = require('mongodb').MongoClient
// viewed at http://localhost:3000
MongoClient.connect('mongodb://localhost:27017', function (err, client) {
    if (err) throw err;

    var db = client.db('kfl');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname + '/login.html'));
});
app.get('/signup_page', function(req, res) {
    res.sendFile(path.join(__dirname + '/signup.html'));
});
app.get('/profile', function(req, res) {
    if (req.session.user && req.cookies.user_id) {
        res.sendFile(__dirname + '/profile.html');
    } else {
        console.log(req.session.user +''+  req.cookies.user_id);
        console.log('login first');
        res.redirect('/');
    }
});
   
app.get('/leaderboard', (req, res) => {
    if (req.session.user && req.cookies.user_id) {
        res.sendFile(__dirname + '/leaderboard.html');
    } else {
        console.log(req.session.user +''+  req.cookies.user_id);
        console.log('login first');
        res.redirect('/');
    }
});

// GET /logout
app.get('/logout', function(req, res) {
    if (req.session) {
      // delete session object
      req.session.destroy(function(err) {
        if(err) {
          console.log('error');
        } else {
            console.log('logout successfully');
        res.redirect('/');
        }
      });
    }
  });

  //LOGIN AND  CREATE SESSION
app.post('/login_user', function (req, res) {
    var email = req.body.email;
    var passw=req.body.password;

    
   
    db.collection('user-login').findOne({ email:req.body.email}, function(err, user) {
        console.log(email)
        if(user ===null){
            console.log('user does not exist');
            //dispaly error message
         //   res.flash('userNotExist', 'User does not exist!');

          res.redirect('/login');
       }else if (user.email === req.body.email && user.password === req.body.password){
           req.session.user = user.email;
           console.log('session created' + user.user_id);
      console.log('login successful');
      
      var name= user.name;
      res.status(200).send;
      res.send('welcome '+name + '<br><br><a href="/leaderboard">leaderboard</a>');
     } else {
       console.log("Credentials wrong");
        //dispaly error message
       //  res.flash('authenticationFailed', 'Used id and password does not matched!');
    //    req.flash('info', 'invalid username or password');
    //res.json({message : " Used email and password does not matched!", status : "success"});
      res.redirect('/');
      // res.end("Login invalid");
     }
});
});



//SignUp
app.post('/sign_up' ,[ 
   
    check('username','Name cannot be left blank')
    .isLength({ min: 1 }),
   
    check('email')    
    .isLength({ min: 1 }).withMessage('Email cannot be left empty')
    .isEmail().withMessage('Please enter a valid email address'),
   

    check('password')
    .isLength({ min: 5 }).withMessage('Password must be at least 5 chars long')
    .matches(/\d/).withMessage('Password must contain one number')
    .custom((value,{req, loc, path}) => {
      if (value !== req.body.cpassword) {
          // throw error if passwords do not match
          throw new Error("Passwords don't match");
      } else {
          return value;
      }
  }),

  

    check('bday','Date of birth cannot be left blank')
    .isLength({ min: 1 }),
    
    check('favteam','Select one favourite team')
    .isLength({ min: 1 }),
    

   ],function(req,res){
    const errors = validationResult(req);

    if (!errors.isEmpty()) {     
  
       res.json({status : "error", message : errors.array()});

    } 
    else {

       
	var username = req.body.username;
	var email= req.body.email;
    var password = req.body.password;
    var bday= req.body.bday;
	var favteam = req.body.favteam;
   
	var data = {
		"username":username,
		"email":email,
        "password": password, 
        "bday":bday,
		"favteam" : favteam
	}
	
		db.collection("user-login").insertOne(data, (err , collection) => {
			if(err) throw err;
			console.log("Record inserted successfully");
            
	 res.redirect('/');  
        });
    } 
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





app.listen(3000);
console.log('Listening on port 3000!');
