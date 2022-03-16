const express = require("express");

const mongoose = require("mongoose");

const ejs = require("ejs");

const path = require("path");

const fs = require("fs");

const Photo = require("./models/Photo");

const fileUpload = require("express-fileupload");

const app = express();
mongoose.connect("mongodb://localhost/pcat-db");

const port = 3000;
//TEMPLATE ENGINE
app.set("view engine", "ejs");

//MIDDLEWARES
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());

//ROUTES
app.get("/", async (req, res) => {
  const photos = await Photo.find({}).sort("-dataCreated");
  res.render("index", {
    photos,
  });
});

app.get("/photos/:id", async (req, res) => {
  const photo = await Photo.findById(req.params.id);
  res.render("photo", { photo });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/add", (req, res) => {
  res.render("add");
});

app.post("/photos", async (req, res) => {
  const uploadDir = "public/uploads";

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  let uploadedImage = req.files.image;
  let uploadPath = __dirname + "/public/uploads/" + uploadedImage.name;
  uploadedImage.mv(uploadPath, async () => {
    Photo.create({ ...req.body, image: "/uploads/" + uploadedImage.name });
    res.redirect("/");
  });
});

app.listen(port, () => {
  console.log(`Sunucu ${port}'da baslatildi.`);
});
