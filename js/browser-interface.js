var titleLength = require('./../js/journal.js')
//jquery to display title title
$(document).ready(function() {
  $("#journal").submit(function(event) {
    var title = $("input#title").val();
    var body = $("input#body").val();
    var output = new Journal(title, body);




    $("#titleOutput").prepend("<li>" + output.title + "</li>");
    $("#bodyOutput").prepend("<li>" + output.body + "</li>");
    $("#countOutput").prepend("<li>" + output.wordCount() + "</li>");

    event.preventDefault();

  });
});

$
