const express = require("express");

const ejs = require("ejs");

const app = express();

//TODO: TEMPLATE ENGINE
app.set("view engine", "ejs");

//TODO:  MIDDLEWARES
app.use(express.static("public"));

//TODO: SCHEMA

//TODO: MVC REFACTOR

//ROUTES
app.get("/", (res, req) => {
  const blog = { id: 1, title: "Blog Title", description: "Blog Description" };
  req.render("index", blog);
});

app.get("/about", (res, req) => {
  req.render("about");
});

app.get("/add_post", (res, req) => {
  req.render("add_post");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server ${port} da baslatildi.`);
});
