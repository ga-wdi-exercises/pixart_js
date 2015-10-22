$(document).ready(function(){
  $("#set-color").on("click", function(){
    event.preventDefault();
    var color = $("#color-field").val();
    $(".brush").css("background", color);
  });
});
