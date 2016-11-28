$(function () {
$('#set-color').one("click", function(e){
  var color = $('#color-field').val();
  $('.brush').css({"background" : color});
  e.preventDefault();
  $("#color-field").keyup(function(event){
    if(event.keyCode == 13){
        $("#set-color").click();
    }
});
});

$(document).ready(function() {
    for(var x = 0; x <= 20; x++) {
            unit.appendTo('body');
        }
    });
});
