//Length method for number of words in the title

exports.journal = function(title, body) {
  this.title = title;
  this.body = body;
};

exports.journal.prototype.wordCount = function() {
  var body = this.body;
  var bodyArray = body.split(" ");
  var bodyLength = bodyArray.length;

  return bodyLength;
};
