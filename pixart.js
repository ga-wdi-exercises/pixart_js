$(document).ready(function(){
  var color;

  $("#set-color").on("click", function(){
    event.preventDefault();
    color = $("#color-field").val();
    $(".brush").css("background", color);
  });
  for (var i = 0; i < 8000; i++ ) {
    $("body").append("<div class='square'></div>");
  }
  $(".square").on("mouseover", function(event){
      var $square = $(event.target);
      $square.css("background", color);

  });
});
