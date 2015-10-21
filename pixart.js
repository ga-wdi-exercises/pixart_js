$(document).ready(function(){
  $("#set-color").on("click",function(evt){
    evt.preventDefault();
    var color = $("#color-field").val();
    $(".brush").css('background',color);
  });
});
