require("dotenv").config();

const express = require("express");

const app = express();
app.set("port", process.env.PORT || 3000);

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

app.listen(app.get("port"), () => {
  console.log(`Listening connections by ${app.get("port")}`);
});
