//Length method for number of words in the title
function titleLength(title) {
  var titleArray = title.split(" ");
  var titleLength = titleArray.length;

  return titleLength;

}


//j query to display title title
$(document).ready(function() {
  $("#journal form").submit(function(event) {
    var titleInput = $("input#title").val();
    console.log(titleInput);
    $(".entry").text(titleInput);
    $("#response").show();

    event.preventDefault();

  });
});
