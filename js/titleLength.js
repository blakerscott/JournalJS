//Length method for number of words in the title
exports.titleLength = function(title) {
  var titleArray = title.split(" ");
  var titleLength = titleArray.length;

  return titleLength;

}
