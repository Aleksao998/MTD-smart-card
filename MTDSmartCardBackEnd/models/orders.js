const mongoose = require("mongoose");
const Shema = mongoose.Schema;

const orderShema = new Shema(
  {
    name: {
      type: String
    },
    lastName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    addressNum: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    postCode: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    cardId: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    holderName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Orders", orderShema);
