//on click have the box "brush" change to color you specified in pickColor

$(document).ready(function() {

  var setColor = $("#set-color");
  var brushColor = $(".brush");
  var userInput;

  var setColor = function(evt) {
    evt.preventDefault();
    userInput = $("#color-field").val();
    brushColor.css("background", userInput);
  }
  $("#set-color").on("click", setColor);


  var canvasColor = function() {}
  for (i = 0; i < 8000; i++) {
    $("body").append("<div class='square'></div>");
  }
  $(".square").on("mouseover", function() {
    $(this).css("background", userInput);
  });

});









// });
