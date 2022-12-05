exports.UpperFirstLetterConvertor = (name) => {
  const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
  return nameCapitalized;
};
exports.mobileNumberConvertor = (number, prefix) => {
  console.log("Mobile convertor");
  if (number.indexOf("+3816") == 0) {
    return number;
  }
  if (number.indexOf("06") == 0) {
    number = number.slice(1);
    const _prefix = prefix;
    number = _prefix.concat("", number);
    return number;
  }
  if (number.indexOf("00381") == 0) {
    number = number.slice(5);
    const _prefix = prefix;
    number = _prefix.concat("", number);
    return number;
  }
  if (number.indexOf("6") == 0) {
    const _prefix = prefix;
    number = _prefix.concat("", number);
    return number;
  }

  return number;
};

exports.homeNumberConvertor = (number, prefix) => {
  console.log("HomeNumber convertor");
  if (number.indexOf("+38111") == 0) {
    return number;
  }
  if (number.indexOf("011") == 0) {
    number = number.slice(1);
    const _prefix = prefix;
    number = _prefix.concat("", number);
    return number;
  }
  if (number.indexOf("00381") == 0) {
    number = number.slice(5);
    const _prefix = prefix;
    number = _prefix.concat("", number);
    return number;
  }
  if (number.indexOf("11") == 0) {
    const _prefix = prefix;
    number = _prefix.concat("", number);
    return number;
  }

  return number;
};

exports.twitterConvertor = (profileName) => {
  if (
    profileName.indexOf("http://twitter.com/") == 0 ||
    profileName.indexOf("https://twitter.com/") == 0
  ) {
    return profileName;
  }
  if (profileName.indexOf("@") == 0) {
    profileName = profileName.slice(1);
    const _link = "http://twitter.com/";
    profileName = _link.concat("", profileName);
    return profileName;
  }
  const _link = "http://twitter.com/";
  profileName = _link.concat("", profileName);
  return profileName;
};

exports.snapchatConvertor = (profileName) => {
  if (
    profileName.indexOf("http://snapchat.com/add/") == 0 ||
    profileName.indexOf("https://snapchat.com/add/") == 0
  ) {
    return profileName;
  }
  if (profileName.indexOf("http://snapchat.com/") == 0) {
    profileName = profileName.slice(20);
    const _link = "http://snapchat.com/add/";
    profileName = _link.concat("", profileName);
    return profileName;
  }
  if (profileName.indexOf("https://snapchat.com/") == 0) {
    profileName = profileName.slice(21);
    const _link = "https://snapchat.com/add/";
    profileName = _link.concat("", profileName);
    return profileName;
  }
  if (profileName.indexOf("@") == 0) {
    profileName = profileName.slice(1);
    const _link = "http://snapchat.com/add/";
    profileName = _link.concat("", profileName);
    return profileName;
  }
  const _link = "http://snapchat.com/add/";
  profileName = _link.concat("", profileName);
  return profileName;
};

exports.instagramConvertor = (profileName) => {
  if (
    profileName.indexOf("http://instagram.com/") == 0 ||
    profileName.indexOf("https://instagram.com/") == 0
  ) {
    return profileName;
  }
  if (profileName.indexOf("@") == 0) {
    profileName = profileName.slice(1);
    const _link = "http://instagram.com/";
    profileName = _link.concat("", profileName);
    return profileName;
  }
  const _link = "http://instagram.com/";
  profileName = _link.concat("", profileName);
  return profileName;
};

const linkedinConvertor = (profileName) => {
  if (profileName.indexOf("http") == 0) {
    return profileName;
  }
  if (
    profileName.indexOf("http") !== 0 ||
    profileName.indexOf("www") !== 0 ||
    profileName.indexOf("linkedin") !== 0 ||
    profileName.indexOf("https") !== 0
  ) {
    const _link = "http://linkedin.com/in/";
    profileName = _link.concat("", profileName);
    return profileName;
  }

  return profileName;
};
