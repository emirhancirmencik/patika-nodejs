const User = require("../models/User");

module.exports = (req, res, next) => {
  User.findById(req.session.userID, (err, user) => {
    console.log(err);
    if (err || !user) return res.redirect("/login");
    next();
  });
};
