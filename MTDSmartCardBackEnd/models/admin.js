const mongoose = require("mongoose");
const Shema = mongoose.Schema;

const adminShema = new Shema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Admin", adminShema);
