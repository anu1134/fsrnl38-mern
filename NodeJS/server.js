const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routess = require("./Routes/restaurants.routes");
const usersRoutes = require("./Routes/users.routes");

const app = express();

app.use(bodyParser.json());

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

app.get("/", (req, res) => {
  res.send("learning nodejs");
});

routess(app);
usersRoutes(app);
