const express = require("express");
const { body } = require("express-validator");
const rateLimit = require("express-rate-limit");
//Models
const Profile = require("../models/profile");
//Controllers
const authController = require("../controllers/auth");

const router = express.Router();

//GET /auth/signup
router.put(
  "/signup",
  [
    body("id").trim().isLength({ min: 8, max: 8 }).withMessage("Error with id"),

    body("email")
      .isEmail()
      .withMessage("Please enter a valid email.")
      .normalizeEmail(),

    body("password").trim().isLength({ min: 5 }),
  ],
  authController.signup
);

const createAccountLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour window
  max: 5, // start blocking after 5 requests
  message:
    "Too many accounts created from this IP, please try again after an hour",
});
//POST /auth/login
router.post("/login", authController.login);

//POST /auth/fillData
router.post("/fillData", authController.fillData);

//GET /auth/validateProfile/
router.get("/validateProfile/:token", authController.validateProfile);
module.exports = router;
