//on click have the box "brush" change to color you specified in pickColor

$(document).ready(function() {

  var setColor = $("#set-color");
  var brushColor = $(".brush");

  var setColor = function(evt) {
    evt.preventDefault();
    var userInput = $("#color-field").val();
    brushColor.css("background", userInput);
  }
  $("#set-color").on("click", setColor);

  //create 20 divs .square append to body
  for (i = 0; i < 8000; i++) {
    +$("body").append("<div class='square'></div>");
  }

  //working to click individual squares green, but not to drag and draw. hmm
  $(".square").on("click", function(){
    $(this).css("background", "green");
  });
})









// });
