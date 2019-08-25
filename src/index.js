require("dotenv").config();

const express = require("express");

const app = express();
app.set("port", process.env.PORT || 3000);

//index route
app.get("/", (req, res) => {
  res.send("Hello Peru!");
});

app.get("/about", (req, res) => {
  res.send("About this corporation");
});

app.listen(app.get("port"), () => {
  console.log(`Listening connections by ${app.get("port")}`);
});
