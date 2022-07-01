const express = require("express");
const ejs = require("ejs");

const app = express();

const port = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200).render("index", { page_name: "index" });
});

app.get("/about", (req, res) => {
  res.status(200).render("about", { page_name: "about" });
});

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
