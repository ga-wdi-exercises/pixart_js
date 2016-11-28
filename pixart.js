$(function () {
$('#set-color').one("click", function(e){
  var color = $('#color-field').val();
  $('.brush').css({"background" : color});
  e.preventDefault();
});





});
