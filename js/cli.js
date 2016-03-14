var titleLength = require('./titleLength.js').titleLength;
var prompt = require('prompt');
prompt.start();

prompt.get('title', function(err, result) {
  console.log('Length of title!');
  var result = titleLength(result.title);
  console.log(result);
});
