const Post = require("../models/Post");

exports.getAllPosts = async (req, res) => {
  const blog = await Post.find().sort("-dateCreated");
  res.render("index", { blog });
};

exports.createPost = async (req, res) => {
  await Post.create(req.body);
  res.redirect("/");
};

exports.getOnePost = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  res.render("post", { post });
};

exports.editPost = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  post.title = req.body.title;
  post.text = req.body.text;
  await post.save();

  res.redirect(`/post/${post._id}`);
};

exports.deletePost = async (req, res) => {
  await Post.deleteOne({ _id: req.params.id });
  res.redirect("/");
};
