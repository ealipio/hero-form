require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const connectionURL = process.env.CONNECTION_URL;
app.set("port", process.env.PORT || 3000);
// --------------------------
mongoose.connect(
  connectionURL,
  {
    useNewUrlParser: true,
    useCreateIndex: true
  },
  err => {
    if (err) {
      console.log(err);
    } else {
      console.log("connected");
    }
  }
);

// require('./models/Idea');

// const Idea = mongoose.model('ideas');
// --------------------------
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// how middleware works
app.use((req, res, next) => {
  console.log(Date.now());
  req.name = "Eisson Alipio";
  next();
});

//index route
app.get("/", (req, res) => {
  console.log(req.name);
  res.send("Hello Peru!");
});

app.get("/about", (req, res) => {
  res.send("About this corporation");
});

app.get("/ideas/add", (req, res) => {
  res.send("add Ideas");
});

app.post("/ideas", (req, res) => {
  console.log(req.body);
  res.send({ message: "You are right, she is the best one" });
});

app.listen(app.get("port"), () => {
  console.log(`Listening connections by ${app.get("port")}`);
});
