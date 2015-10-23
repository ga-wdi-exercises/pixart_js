var clickCount = 0;
var squareColor;
$(document).ready(function(){

  for (i = 0; i < 1000; i++) {
    $("<div></div>").attr("class", "square").appendTo($("body"));
  }

  $(".square").css({
    "width": "30px",
    "height": "30px",
    "margin": "0",
  });



  // add 2 boxes for the most recently used colors
  for (i = 0; i < 2; i++) {
    $("<div></div>").attr("class", "brush").appendTo($(".controls"));
  }

  $("#set-color").on("click", function(){
    event.preventDefault();
    $(".brush").eq(clickCount).css("background", $("input").val());
    $(".square").on("mouseover", function(){
      $(this).css("background", $("input").val());
    });
    if(clickCount < 2){
      clickCount++;
    } else {
       clickCount = 0;
    }
  });

// listen for click on brush
// get the value of that brush
// change the background of the square with the value of that brush that was clicked on
// will original mouseover cause issues?


  $(".brush").on("click", function(){
  squareColor = $(this).css("background") ;
    $(".square").on("mouseover", function(){
      $(this).css("background", squareColor);
    });
  });





});
