const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routess = require("./Routes/restaurants.routes");
const usersRoutes = require("./Routes/users.routes");

const app = express();

// Built in middlewares
app.use(bodyParser.json());

//application level middleware
//app.use(loggedInUserRequest);

mongoose.connect(
  "mongodb+srv://geeksforgeeks:geeks123@cluster0.r8udfmn.mongodb.net/"
);

const db = mongoose.connection;

db.on("error", () => {
  console.log("connection not successful");
});

db.on("open", () => {
  console.log("connection is successful");
});

app.listen("5000", () => {
  console.log("server is running on port 5000");
});

// route level middleware
app.get("/", loggedInUserRequest, (req, res) => {
  res.send("learning nodejs");
});

function loggedInUserRequest(req, res, next) {
  console.log("user has initiated request");
  next();
}

routess(app);
usersRoutes(app);
