const express = require("express");

const app = express();

//TODO:  MIDDLEWARES

//TODO: TEMPLATE ENGINE

//TODO: SCHEMA

//TODO: MVC REFACTOR

//ROUTES
app.get("/", (res, req) => {
  const blog = { id: 1, title: "Blog Title", description: "Blog Description" };
  req.send(blog);
});
const port = 3000;

app.listen(port, () => {
  console.log(`Server ${port} da baslatildi.`);
});
