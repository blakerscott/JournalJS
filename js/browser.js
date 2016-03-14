
$(document).ready(function() {
  $("form").submit(function(event) {
    var titleInput = $("input#title").val();
    console.log(title);
    $(".entry").text(titleInput);
    $("#response").show();

    event.preventDefault();

  });
});
