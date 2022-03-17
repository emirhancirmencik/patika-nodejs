const express = require("express");

const mongoose = require("mongoose");

const fileUpload = require("express-fileupload");

const methodOverride = require("method-override");

const ejs = require("ejs");

const path = require("path");

const Photo = require("./models/Photo");

const photoController = require("./controllers/photoController");

const pageController = require("./controllers/pageController");

const app = express();
mongoose.connect(
  "mongodb+srv://emyran:6kx7SXOweWChBVZm@cluster0.xhjax.mongodb.net/pcat-db?retryWrites=true&w=majority"
);

//TEMPLATE ENGINE
app.set("view engine", "ejs");

//MIDDLEWARES
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(methodOverride("_method", { methods: ["POST", "GET"] }));

//ROUTES
app.get("/", photoController.getAllPhotos);
app.get("/photos/:id", photoController.getPhoto);
app.post("/photos", photoController.createPhoto);
app.put("/photos/:id", photoController.editPhoto);
app.delete("/photos/:id", photoController.deletePhoto);
app.get("/about", pageController.getAboutPage);
app.get("/add", pageController.getAddPage);
app.get("/photos/edit/:id", pageController.getEditPage);

const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`Sunucu ${port}'da baslatildi.`);
});
