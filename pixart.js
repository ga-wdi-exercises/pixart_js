$(function () {
$('#set-color').one("click", function(e){
  var color = $('#color-field').val();
  $('.brush').css({"background" : color});
  e.preventDefault();
  $("#id_of_textbox").keyup(function(event){
    if(event.keyCode == 13){
        $("#id_of_button").click();
    }
});
});





});
