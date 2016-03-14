$(document).ready(function(){
  $('#secondForm').submit(function(event){
    event.preventDefault();
    var body = $('#body').val();
    $('#secondForm').hide();
    $('#bodyOutput').prepend('<p>' body '</p>');
  });
});
