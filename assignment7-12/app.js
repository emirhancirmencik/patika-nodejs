const express = require("express");

const ejs = require("ejs");

const mongoose = require("mongoose");

const methodOverride = require("method-override");

const postController = require("./controllers/postController");

const pageController = require("./controllers/pageController");

const app = express();
mongoose.connect(
  "mongodb+srv://cleanblog:bbuk8ihBNyhwkrta@cluster0.hgclw.mongodb.net/cleanblog-db?retryWrites=true&w=majority"
);

// TEMPLATE ENGINE
app.set("view engine", "ejs");

// MIDDLEWARES
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // fix for req body undefined.
app.use(methodOverride("_method", { methods: ["POST", "GET"] }));

//ROUTES
app.get("/", postController.getAllPosts);
app.post("/", postController.createPost);
app.delete("/post/:id", postController.deletePost);
app.put("/post/:id", postController.editPost);
app.get("/post/:id", postController.getOnePost);
app.get("/about", pageController.getAbout);
app.get("/post/edit/:id", pageController.getEdit);
app.get("/add_post", pageController.getAddPost);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server ${port} da baslatildi.`);
});
