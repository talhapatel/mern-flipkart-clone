const express = require("express");
const { check } = require("express-validator");
const {
  signup,
  signin,
  requiredSignIn,
} = require("../../controller/admin/auth");
const router = express.Router();

router.post(
  "/admin/signup",
  [
    check("firstName").isEmpty().withMessage("firstName is required"),
    check("lastName").isEmpty().withMessage("lastName is required"),
    check("email").isEmail().withMessage("valid email is required"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 character long"),
  ],
  signup
);
router.post("/admin/signin", signin);

module.exports = router;
