var browserInterface = require('./browser-interface.js').browserInterface;
var prompt = require('prompt');
prompt.start();

prompt.get('title', function(err, result) {
  console.log('Length of title!');
  var output = browserInterface(result.title);
  console.log(result);
});
