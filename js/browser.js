
$(document).ready(function() {
  $("form").submit(function(event) {
    var response = $("input#response").val();
    console.log(response);
    $(".response").text(response);

    event.preventDefault();

  });
});
