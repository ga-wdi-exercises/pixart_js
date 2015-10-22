$(document).ready(function(){
  $("#set-color").on("click", function(){
    event.preventDefault()
    var color = $("#color-field").val();
    $(".brush").css("background-color", color);
    console.log(color);
  });

  for (var i = 0; i < 20; i++) {
    $(".controls").after("<div class='square'></div>");
  }
});
