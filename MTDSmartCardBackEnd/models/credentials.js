const mongoose = require("mongoose");
const Shema = mongoose.Schema;

const credentialShema = new Shema({
  _id: {
    type: String,
    required: true,
  },
  ClientID: { type: String },
  ClientSecret: { type: String },
  RedirectURL: { type: String },
  refresh_token: { type: String },
  userGmail: { type: String },
});

module.exports = mongoose.model("Credential", credentialShema);
