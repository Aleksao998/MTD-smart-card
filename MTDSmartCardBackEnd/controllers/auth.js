const crypto = require("crypto");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var fs = require("fs");

//Gmail verification
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

//models
const Profile = require("../models/profile");
const Credential = require("../models/credentials");

//Utils
const ProfileFieldConvertor = require("../utils/ProfileFieldConvertor/ProfileFieldCOnvertor");

exports.fillData = (req, res, next) => {
  id = req.body.id;
  var showData = {
    firstName: false,
    lastName: false,
    companyName: false,
    jobTitle: false,
    gender: false,
    mobilePhone: false,
    homePhone: false,
    email: true,
    workEmail: false,
    twitter: false,
    linkedIn: false,
    facebook: false,
    snapchat: false,
    youtube: false,
    instagram: false,
    whatsapp: false,
    viber: false,
    adress: false,
    birthday: false,
  };
  mobileNumber = "";
  homeNumber = "";
  email = req.body.email;
  workEmail = "";

  twitter = "";
  twitterUrl = "";
  snapchat = "";
  snapchatUrl = "";
  instagram = "";
  instagramUrl = "";
  linkedin = "";
  facebook = "";
  youtube = "";

  whatsapp = "";
  viber = "";
  address = "";
  birthday = "";

  Profile.findById(id)
    .then((user) => {
      console.log("Usao u find user ", user);
      if (!user) {
        const error = new Error("A user with this id could not be found!");
        error.statusCode = 401;
        throw error;
      }

      user.profileData.contactInfo.mobilePhone = mobileNumber;
      user.profileData.contactInfo.homePhone = homeNumber;
      user.profileData.contactInfo.email = email;
      user.profileData.contactInfo.workEmail = workEmail;

      user.profileData.socialNetwork.twitter = [twitter, twitterUrl];
      user.profileData.socialNetwork.linkedIn = ["Pogledaj profil", linkedin];
      user.profileData.socialNetwork.facebook = ["Pogledaj profil", facebook];
      user.profileData.socialNetwork.youtube = ["Pogledaj profil", youtube];
      user.profileData.socialNetwork.snapchat = [snapchat, snapchatUrl];
      user.profileData.socialNetwork.instagram = [instagram, instagramUrl];

      user.profileData.directMessage.whatsapp = whatsapp;
      user.profileData.directMessage.viber = viber;

      user.profileData.personalInfo.adress = address;
      user.profileData.personalInfo.birthday = birthday;

      user.showData = showData;

      return user.save();
    })
    .then((profileData) => {
      res.status(200).json({
        msg: "Field Added success",
      });
    })
    .catch((err) => {
      console.log(err);
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.validateProfile = async (req, res, next) => {
  console.log("Pocetak");
  const token = req.params.token;

  try {
    const user = await Profile.findOne({
      validationToken: token,
    });
    const token2 = jwt.sign(
      {
        email: user.email,
        userId: user._id,
      },
      "!secrethashtagfortokenvalidationsss!!##432",
      { expiresIn: "1h" }
    );
    if (user.validation === true) {
      return res.status(200).json({
        token: token2,
        userId: user._id,
        verified: true,
      });
    }
    if (user.validationTokenExpiration > Date.now()) {
      user.validation = true;
      const saveUser = await user.save();

      return res.status(200).json({
        token: token2,
        userId: user._id,
      });
    } else {
      const userDeleted = await Profile.findOneAndDelete({
        validationToken: token,
      });
      return res.status(401).json({
        msg: "User deleted",
      });
    }
  } catch (err) {
    console.log(err);
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  let loadedUser;
  Profile.findOne({ email: email })
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
      const imageUrl = loadedUser.imageUrl;

      fs.readFile(imageUrl, (err, data) => {
        if (err) throw err;

        let buff = new Buffer(data);
        let base64data = buff.toString("base64");
        base64data = "data:image/png;base64," + base64data;
        res.status(200).json({
          user: loadedUser,
          token: token,
          userId: loadedUser._id,
          profileImage: base64data,
        });
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
    const findCredential = await Credential.findOne({ _id: "credentials" });
    const oauth2Client = new OAuth2(
      findCredential.ClientID, // ClientID
      findCredential.ClientSecret, // Client Secret
      findCredential.RedirectURL // Redirect URL
    );
    oauth2Client.setCredentials({
      refresh_token: findCredential.refresh_token,
    });
    const accessToken = oauth2Client.getAccessToken();
    const smtpTransport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: findCredential.userGmail,
        clientId: findCredential.ClientID,
        clientSecret: findCredential.ClientSecret,
        refreshToken: findCredential.refresh_token,
        accessToken: accessToken,
      },
    });
    const error = validationResult(req);
    console.log(error);
    if (!error.isEmpty()) {
      const error = new Error("Validation failed.");
      error.statusCode = 422;
      error.data = error.array();
      throw error;
    }
    const id = req.body.id;
    const email = req.body.email;
    const firstName = "";
    const lastName = "";
    const password = req.body.password;
    const companyName = "";
    const jobTitle = "";
    const gender = req.body.gender;

    var urlImage;
    if (gender === "male") {
      urlImage = "./public/profile-images/avatarMan.jpg";
    } else {
      urlImage = "./public/profile-images/avatarGirl.jpg";
    }
    const hashedPw = await bcrypt.hash(password, 12);
    crypto.randomBytes(32, async (err, buffer) => {
      if (err) {
        const error = new Error("System failed");
        error.statusCode = 422;
        error.data = error.array();
        throw error;
      }
      const token = jwt.sign(
        {
          email: email,
          userId: id,
        },
        "!secrethashtagfortokenvalidationsss!!##432",
        { expiresIn: "1h" }
      );
      var profile = new Profile({
        _id: id,
        email: email,
        password: hashedPw,
        imageUrl: urlImage,
        isEdit: true,
        validation: true,
        validationToken: token,
        validationTokenExpiration: Date.now() + 3600000,
        profileData: {
          gender: gender,
        },
      });
      /*
      const mailOptions = {
        from: "opacicaleksa4@gmail.com",
        to: email,
        subject: "Email confirm",
        generateTextFromHTML: true,
        html: `
          <p> Click on link to confirm email! <p>
          <p> CLick this <a href="http://https://mtdsmartcardbackend.com/:3000/auth/${token}> </a>
      `,
      };
      smtpTransport.sendMail(mailOptions, (error, response) => {
        if (!error) {
          console.log(response);
        } else {
          const error = new Error("System failed");
          error.statusCode = 422;
          error.data = error.array();
          throw error;
        }
        smtpTransport.close();
      });
      */
      const savedProfile = await profile.save();
      res.status(200).json({
        msg: "Succesfull",
        token: token,
        id: id,
      });
    });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
