var titleLength = require('./../js/titleLength.js')
//jquery to display title title
$(document).ready(function() {
  $("#journal form").submit(function(event) {
    var titleInput = $("input#title").val();
    console.log(titleInput);
    $(".entry").text(titleInput);
    $("#titleOutput").show();

    event.preventDefault();

  });
});
