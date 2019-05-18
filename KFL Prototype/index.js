const express = require("express");
require("./db/mongoose");
const routerUser = require("./router/users");
const routerTask = require("./router/tasks");
const bcrypt = require("bcryptjs");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(routerUser);
app.use(routerTask);

app.listen(port, () => {
  console.log("server is up on port " + port);
});

const jwt = require("jsonwebtoken");

const myFunction = async () => {
  const token = jwt.sign({ _id: "12345" }, "thisismytoken", {
    expiresIn: "7 days"
  });
  console.log(token);

  const verify = jwt.verify(token, "thisismytoken");
  console.log(verify);
};

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

myFunction();
