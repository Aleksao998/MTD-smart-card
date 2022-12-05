export const addProfileData = (
  firstname = "",
  lastName = "",
  companyName = "",
  jobTitle = "",
  gender = "",
  mobilePhone = "",
  homePhone = "",
  email = "",
  workEmail = "",
  twitter = "",
  linkedIn = "",
  facebook = "",
  snapchat = "",
  youtube = "",
  instagram = "",
  whatsapp = "",
  viber = "",
  adress = "",
  birthday = "",
  imageUrl = ""
) => {
  return {
    type: "ADD_PROFILE_DATA",
    profileData: {
      firstname,
      lastName,
      companyName,
      jobTitle,
      gender,
      imageUrl,
    },
    contactInfo: {
      mobilePhone,
      homePhone,
      email,
      workEmail,
    },
    socialNetwork: {
      twitter,
      linkedIn,
      facebook,
      snapchat,
      youtube,
      instagram,
    },
    directMessages: {
      whatsapp,
      viber,
    },
    personalInfo: {
      adress,
      birthday,
    },
  };
};
