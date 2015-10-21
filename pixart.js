$(document).ready(function(){

  $("#set-color").on("click", function(evt){
    colorText = $("#color-field").val();
    evt.preventDefault();
    $(".brush").css("background", colorText);
  })



})
