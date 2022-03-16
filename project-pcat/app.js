const express = require("express");
const ejs = require("ejs");
const app = express();
const path = require("path");

app.use(express.static("public"));

const port = 3000;
//TEMPLATE ENGINE
app.set("view engine", "ejs");

//MIDDLEWARES
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/add", (req, res) => {
  res.render("add");
});

app.listen(port, () => {
  console.log(`Sunucu ${port}'da baslatildi.`);
});
