const getSecondString = (strcmp) => {
  var tempString = strcmp;
  var strArray = tempString.split("-");
  var res = strArray[strArray.length - 1];
  return res;
};

export default getSecondString;
