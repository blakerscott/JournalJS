//Length method for number of words in the title
exports.bodyLength = function(body) {
  var bodyArray = body.split(" ");
  var bodyLength = bodyArray.length;

  return bodyLength;

}
