const express = require("express");
const { body } = require("express-validator");
const userController = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");
const User = require("../models/User");
const router = express.Router();

router.route("/signup").post(
  [
    body("name").not().isEmpty().withMessage("Please Enter Your Name"),
    body("email")
      .not()
      .isEmpty()
      .withMessage(" Please Enter Your Email")
      .custom((userMail) => {
        return User.findOne({ email: userMail }).then((user) => {
          if (user) {
            return Promise.reject("Email is already exists!");
          }
        });
      }),
    body("password").not().isEmpty().withMessage(" Please Enter Your Password"),
  ],
  userController.createUser
);
router.route("/:id").delete(userController.deleteUser);
router.route("/login").post(userController.loginUser);
router.route("/logout").get(userController.logoutUser);
router.route("/dashboard").get(authMiddleware, userController.getDashboardPage);
module.exports = router;
