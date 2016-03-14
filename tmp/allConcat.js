var titleLength = require('./../js/titleLength.js')
//jquery to display title title
$(document).ready(function() {
  $("#journal form").submit(function(event) {
    var titleInput = $("input#title").val();
    console.log(titleInput);
    $(".entry").text(titleInput);
    $("#response").show();

    event.preventDefault();

  });
});

//Length method for number of words in the title
exports.bodyLength = function(body) {
  var bodyArray = body.split(" ");
  var bodyLength = bodyArray.length;

  return bodyLength;

}
