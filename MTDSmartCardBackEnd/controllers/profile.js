const Profile = require("../models/profile");
const arrayWrap = require("arraywrap");
var vCardsJS = require("vcards-js");
var fs = require("fs");
const path = require("path");
const multer = require("multer");
const bcrypt = require("bcryptjs");

//Utils
const ProfileFieldConvertor = require("../utils/ProfileFieldConvertor/ProfileFieldCOnvertor");
const isProfileEmpty = require("../utils/isProfileEmpty");
const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function (req, file, cb) {
    cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
}).single("myImage");

exports.uploadImage = (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
    } else {
      var img = req.body.myImage;

      var data = img.replace(/^data:image\/\w+;base64,/, "");

      var buf = new Buffer(data, "base64");
      Profile.findById(req.body.id)
        .then((profile) => {
          profile.imageUrl = "./public/profile-images/" + req.body.imageName;
          return profile.save();
        })
        .then((profileSaved) => {
          fs.writeFile(
            "./public/profile-images/" + req.body.imageName,
            buf,
            function (err, result) {
              if (err) console.log("error", err);
              else {
                return res.status(200).json({
                  msg: "image uploaded",
                });
              }
            }
          );
        })
        .catch((err) => {});
    }
  });
};

exports.getAllProfile = (req, res, next) => {
  Profile.find()
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

exports.getProfile = (req, res, next) => {
  userId = req.params.id;

  Profile.findById(userId)
    .then((profile) => {
      if (profile.validation === false) {
        return res.status(201).json({
          profileData: profile,
        });
      } else {
        const imageUrl = profile.imageUrl;

        fs.readFile(imageUrl, (err, data) => {
          if (err) throw err;

          let buff = new Buffer(data);
          let base64data = buff.toString("base64");
          base64data = "data:image/png;base64," + base64data;
          return res.status(200).json({
            profileData: profile,
            profileImage: base64data,
          });
        });
      }
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.deleteUser = (req, res, next) => {
  userId = req.body.id;

  Profile.findByIdAndDelete(userId)
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
exports.updateProfileAdmin = async (req, res, next) => {
  email = req.body.email;
  password = req.body.password;

  id = req.body.id;
  if (password !== "**********") {
    try {
      const hashedPw = await bcrypt.hash(password, 12);
      const profile = await Profile.findByIdAndUpdate(id, {
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
      const profile = await Profile.findByIdAndUpdate(id, {
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
exports.updateProfile = (req, res, next) => {
  userId = req.userId;

  firstName = req.body.firstName;
  lastName = req.body.lastName;
  companyName = req.body.companyName;
  jobTitle = req.body.jobTitle;

  mobileNumber = ProfileFieldConvertor.mobileNumberConvertor(
    req.body.mobileNumber,
    "+381"
  );
  homeNumber = ProfileFieldConvertor.homeNumberConvertor(
    req.body.homeNumber,
    "+381"
  );
  email = req.body.email;
  workEmail = req.body.workEmail;

  twitter = req.body.twitter[0];
  twitterUrl = ProfileFieldConvertor.twitterConvertor(req.body.twitter[0]);

  snapchat = req.body.snapchat[0];
  snapchatUrl = ProfileFieldConvertor.snapchatConvertor(req.body.snapchat[0]);

  instagram = req.body.instagram[0];
  instagramUrl = ProfileFieldConvertor.instagramConvertor(
    req.body.instagram[0]
  );
  linkedin = req.body.linkedin[1];
  facebook = req.body.facebook[1];
  youtube = req.body.youtube[1];

  whatsapp = ProfileFieldConvertor.mobileNumberConvertor(
    req.body.whatsapp,
    "+381"
  );
  viber = ProfileFieldConvertor.mobileNumberConvertor(req.body.viber, "+381");
  address = req.body.address;
  birthday = req.body.birthday;

  Profile.findById(userId)
    .then((profile) => {
      profile.profileData.firstName = firstName;
      profile.profileData.lastName = lastName;
      profile.profileData.companyName = companyName;
      profile.profileData.jobTitle = jobTitle;
      profile.isEdit = false;
      profile.profileData.contactInfo.mobilePhone = mobileNumber;
      profile.profileData.contactInfo.homePhone = homeNumber;
      profile.profileData.contactInfo.email = email;
      profile.profileData.contactInfo.workEmail = workEmail;

      profile.profileData.socialNetwork.twitter = [twitter, twitterUrl];

      profile.profileData.socialNetwork.linkedIn = [
        "Pogledaj profil",
        linkedin,
      ];
      profile.profileData.socialNetwork.facebook = [
        "Pogledaj profil",
        facebook,
      ];
      profile.profileData.socialNetwork.youtube = ["Pogledaj profil", youtube];
      profile.profileData.socialNetwork.snapchat = [snapchat, snapchatUrl];
      profile.profileData.socialNetwork.instagram = [instagram, instagramUrl];

      profile.profileData.directMessage.whatsapp = whatsapp;
      profile.profileData.directMessage.viber = viber;

      profile.profileData.personalInfo.adress = address;
      profile.profileData.personalInfo.birthday = birthday;
      profile.showData = req.body.showData;
      return profile.save();
    })
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

exports.checkEmail = (req, res, next) => {
  const email = arrayWrap(req.query.email || "");

  const _email = email[0];
  Profile.findOne({ email: _email })
    .then((result) => {
      if (!result) {
        res.status(200).json({
          message: "Profile does not exist!",
        });
        return;
      } else {
        res.status(400).json({
          message: "Profile does not exist!",
        });
        return;
      }
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.createVCF = (req, res, next) => {
  var vCard = vCardsJS();
  const firstName = arrayWrap(req.query.firstName || "");
  vCard.firstName = firstName[0];

  const lastName = arrayWrap(req.query.lastName || "");
  vCard.lastName = lastName[0];

  const organization = arrayWrap(req.query.organization || "");
  vCard.organization = organization[0];

  const role = arrayWrap(req.query.jobTitle || "");
  vCard.role = role[0];

  //Contact info
  const homePhone = arrayWrap(req.query.homePhone || "");
  vCard.homePhone = homePhone[0];

  const cellPhone = arrayWrap(req.query.mobileNumber || "");
  vCard.cellPhone = cellPhone[0];

  const email = arrayWrap(req.query.email || "");
  vCard.email = email[0];

  const workEmail = arrayWrap(req.query.workEmail || "");
  vCard.workEmail = workEmail[0];

  //Social network
  const facebook = arrayWrap(req.query.facebook || "");
  vCard.socialUrls["facebook"] = facebook[0];

  const linkedIn = arrayWrap(req.query.linkedIn || "");
  vCard.socialUrls["linkedIn"] = linkedIn[0];

  const twitter = arrayWrap(req.query.twitter || "");
  vCard.socialUrls["twitter"] = twitter[0];

  const snapchat = arrayWrap(req.query.snapchat || "");

  vCard.socialUrls["snapchat"] = snapchat[0];

  const youtube = arrayWrap(req.query.youtube || "");

  vCard.socialUrls["youtube"] = youtube[0];
  
  const instagram = arrayWrap(req.query.instagram || "");
 
  vCard.socialUrls["instagram"] = instagram[0];

  //Direct messages

  //Personal info
  const homeAddress = arrayWrap(req.query.address || "");
  vCard.homeAddress.street = homeAddress[0];
  console.log(vCard)
  res.set("Content-Type", "text/vcard");
 

  res.send(vCard.getFormattedString());
};

exports.findById = (req, res, next) => {
  const id = req.params.id;

  Profile.findById(id)
    .then((result) => {
      const empty = isProfileEmpty.isProfileEmpty(result);
      if (empty) {
        return res.status(201).json({});
      }
      if (result !== null) {
        if (result.validation === false) {
          return res.status(401).json({});
        }
        res.status(200).json({
          message: "Profile found successfully!",
          data: result,
        });
      } else {
        res.status(400).json({
          message: "Profile not found",
        });
      }
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
