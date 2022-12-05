const mongoose = require("mongoose");
const Shema = mongoose.Schema;

const profileShema = new Shema(
  {
    _id: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
    },
    isEdit: Boolean,
    validation: Boolean,
    validationToken: String,
    validationTokenExpiration: Date,
    profileData: {
      firstName: {
        type: String,
      },
      lastName: {
        type: String,
      },
      companyName: {
        type: String,
      },
      jobTitle: {
        type: String,
      },
      gender: {
        type: String,
      },
      contactInfo: {
        mobilePhone: {
          type: String,
        },
        homePhone: {
          type: String,
        },
        email: {
          type: String,
        },
        workEmail: {
          type: String,
        },
      },
      socialNetwork: {
        twitter: [
          {
            type: String,
          },
        ],
        linkedIn: [
          {
            type: String,
          },
        ],
        facebook: [
          {
            type: String,
          },
        ],
        snapchat: [
          {
            type: String,
          },
        ],
        youtube: [
          {
            type: String,
          },
        ],
        instagram: [
          {
            type: String,
          },
        ],
      },
      directMessage: {
        whatsapp: {
          type: String,
        },
        viber: {
          type: String,
        },
      },
      personalInfo: {
        adress: {
          type: String,
        },
        birthday: {
          type: String,
        },
      },
    },
    showData: {
      firstName: {
        type: Boolean,
      },
      lastName: {
        type: Boolean,
      },
      companyName: {
        type: Boolean,
      },
      jobTitle: {
        type: Boolean,
      },
      gender: {
        type: Boolean,
      },
      mobilePhone: {
        type: Boolean,
      },
      homePhone: {
        type: Boolean,
      },
      email: {
        type: Boolean,
      },
      workEmail: {
        type: Boolean,
      },
      twitter: {
        type: Boolean,
      },
      linkedIn: {
        type: Boolean,
      },
      facebook: {
        type: Boolean,
      },
      snapchat: {
        type: Boolean,
      },
      youtube: {
        type: Boolean,
      },
      instagram: {
        type: Boolean,
      },
      whatsapp: {
        type: Boolean,
      },
      viber: {
        type: Boolean,
      },
      adress: {
        type: Boolean,
      },
      birthday: {
        type: Boolean,
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", profileShema);
