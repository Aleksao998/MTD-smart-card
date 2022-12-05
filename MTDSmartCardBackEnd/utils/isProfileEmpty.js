exports.isProfileEmpty = (result) => {
  if (result == null) return false;
  if (result.isEdit == true) return true;
  return false;
};
