const userProfileReducerDefaultState = {
  profileData: {
    firstname: " ",
    lastName: "",
    companyName: "",
    jobTitle: "",
    gender: "",
    imageUrl: "",
  },
  contactInfo: {
    mobilePhone: "",
    homePhone: "",
    email: "",
    workEmail: "",
  },
  socialNetwork: {
    twitter: "",
    linkedIn: "",
    facebook: "",
    snapchat: "",
    youtube: "",
    instagram: "",
  },
  directMessages: {
    whatsapp: "",
    viber: "",
  },
  personalInfo: {
    adress: "",
    birthday: "",
  },
};

export default (state = userProfileReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_PROFILE_DATA":
      return {
        ...state,
        profileData: action.profileData,
        contactInfo: action.contactInfo,
        socialNetwork: action.socialNetwork,
        directMessages: action.directMessages,
        personalInfo: action.personalInfo,
      };
    default:
      return state;
  }
};
