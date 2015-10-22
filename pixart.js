
$(document).ready(function(){
  $("#set-color").on("click", function(){
    event.preventDefault();
  var brushColor = $("input").val();
  $(".brush").css("background-color", brushColor);
});
});
