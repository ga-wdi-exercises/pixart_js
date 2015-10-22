$(document).ready(function(){
  $("#set-color").on("click", function(){
    event.preventDefault();
    var color = $("#color-field").val();
    $(".brush").css("background-color", color);
    console.log(color);
  });

  for (var i = 0; i < 20; i++) {
    $(".controls").after("<div class='square'></div>");

  }
  $(".square").on("click", function(){
    var color = $("#color-field").val();
    $(this).css("background-color", color);
    console.log(color);
  });


  /*var squares = document.querySelectorAll(".square");
  for(var j=0; j < squares.length; j++) {
    squares[j].addEventListener("click", function(){
      event.target.styles
    });
  }*/

  });
