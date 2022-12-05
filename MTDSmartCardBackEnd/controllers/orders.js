//models
const Orders = require("../models/orders");
const Profile = require("../models/profile");

exports.createOrder = async (req, res, next) => {
  var arr = [];
  try {
    const profile = await Profile.find({}, "_id");

    profile.forEach((element) => {
      arr.push(element._id);
    });
    for (var i = 0; i < req.body.number; i++) {
      var id = "";
      do {
        var result = "";
        var characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        var charactersLength = characters.length;
        for (var j = 0; j < 8; j++) {
          result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
          );
        }
        id = result;
      } while (arr.includes(result));
      var order = new Orders({
        name: req.body.name,
        lastName: req.body.lastName,
        address: req.body.address,
        addressNum: req.body.adressNum,
        city: req.body.city,
        postCode: req.body.postCode,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        cardId: id,
        status: "Unprocessed",
        holderName: req.body.arrayOfUserNames[i],
      });
      const savedProfile = await order.save();
    }
    res.status(200).json({
      msg: "Succesfull",
    });
  } catch (err) {
    console.log(err);
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
exports.getAllOrders = async (req, res, next) => {
  Orders.find()
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
exports.deleteOrder = async (req, res, next) => {
  userId = req.body.id;

  Orders.findByIdAndDelete(userId)
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

exports.updateOrder = async (req, res, next) => {
  const order = await Orders.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    data: user,
  });
};
