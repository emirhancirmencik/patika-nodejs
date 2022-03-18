const express = require("express");

const ejs = require("ejs");

const mongoose = require("mongoose");

const Post = require("./models/Post");

const app = express();
mongoose.connect(
  "mongodb+srv://cleanblog:bbuk8ihBNyhwkrta@cluster0.hgclw.mongodb.net/cleanblog-db?retryWrites=true&w=majority"
);

//TODO: TEMPLATE ENGINE
app.set("view engine", "ejs");

//TODO:  MIDDLEWARES
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // fix for req body undefined.

//TODO: SCHEMA

//TODO: MVC REFACTOR

//ROUTES
app.get("/", async (req, res) => {
  const blog = await Post.find().sort("-dateCreated");
  res.render("index", { blog });
});

app.post("/", async (req, res) => {
  await Post.create(req.body);
  res.redirect("/");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/add_post", (req, res) => {
  res.render("add_post");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server ${port} da baslatildi.`);
});
