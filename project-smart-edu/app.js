const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const methodOverride = require("method-override");
const pageRoute = require("./routes/pageRoute");
const courseRoute = require("./routes/courseRoute");
const categoryRoute = require("./routes/categoryRoute");
const userRoute = require("./routes/userRoute");
const app = express();

mongoose
  .connect(
    "mongodb+srv://smarteduproject:AhrBgdlJfzuJot9u@cluster0.vi9jg.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("database connected.");
  });

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing
app.use(
  session({
    secret: "my_keyboard_cat",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl:
        "mongodb+srv://smarteduproject:AhrBgdlJfzuJot9u@cluster0.vi9jg.mongodb.net/?retryWrites=true&w=majority",
    }),
  })
);
global.userIN = null;
app.use("*", (req, res, next) => {
  userIN = req.session.userID;
  next();
});
app.use(methodOverride("_method", { methods: ["POST", "GET"] }));
app.use(flash());
app.use((req, res, next) => {
  res.locals.flashMessages = req.flash();
  next();
});
app.use("/", pageRoute);
app.use("/courses", courseRoute);
app.use("/categories", categoryRoute);
app.use("/users", userRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
