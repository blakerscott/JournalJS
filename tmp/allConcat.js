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

$(document).ready(function(){
  $('#secondForm').submit(function(event){
    event.preventDefault();
    var body = $('#body').val();
    $('#secondForm').hide();
    $('#bodyOutput').prepend('<p>' body '</p>');
  });
});
