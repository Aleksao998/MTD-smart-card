const crypto = require("crypto");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//models
const Admin = require("../models/admin");

exports.updateAdmin = async (req, res, next) => {
  email = req.body.email;
  password = req.body.password;

  id = req.body.id;
  if (password !== "**********") {
    try {
      const hashedPw = await bcrypt.hash(password, 12);
      const profile = await Admin.findByIdAndUpdate(id, {
        email,
        password: hashedPw,
      });
      res.status(200).json({
        message: "Profile updated successfully!",
      });
      return;
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  } else {
    try {
      const profile = await Admin.findByIdAndUpdate(id, {
        email,
      });
      res.status(200).json({
        message: "Profile updated successfully!",
      });
      return;
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  }
};

exports.deleteAdmin = async (req, res, next) => {
  userId = req.body.id;

  Admin.findByIdAndDelete(userId)
    .then((result) => {
      res.status(200).json({
        message: "Profile updated successfully!",
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.getAllAdmins = async (req, res, next) => {
  Admin.find()
    .then((result) => {
      return res.status(200).json({
        data: result,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.signup = async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const hashedPw = await bcrypt.hash(password, 12);
    crypto.randomBytes(32, async (err, buffer) => {
      if (err) {
        const error = new Error("System failed");
        error.statusCode = 422;
        error.data = error.array();
        throw error;
      }
      const token = buffer.toString("hex");

      var profile = new Admin({
        email: email,
        password: hashedPw,
        validationToken: token,
      });
      const savedProfile = await profile.save();
      res.status(200).json({
        msg: "Succesfull",
      });
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.login = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  let loadedUser;
  const admin = await Admin.find();
  console.log(admin);
  Admin.findOne({ email: email })
    .then((user) => {
      if (!user) {
        const error = new Error("A user with this email could not be found!");
        error.statusCode = 401;
        throw error;
      }
      loadedUser = user;
      return bcrypt.compare(password, user.password);
    })
    .then((isEqual) => {
      if (!isEqual) {
        const error = new Error("Password is incorect!");
        error.statusCode = 401;
        throw error;
      }

      const token = jwt.sign(
        {
          email: loadedUser.email,
          userId: loadedUser._id,
        },
        "!secrethashtagfortokenvalidationsss!!##432",
        { expiresIn: "1h" }
      );

      res.status(200).json({
        user: loadedUser,
        token: token,
        userId: loadedUser._id,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
