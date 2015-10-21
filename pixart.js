$(document).ready(function() {
  // Set Brush Color
  var setColorButton = $("#set-color");
  var brushColorBox = $(".brush");
  var setColor = function(evt) {
    evt.preventDefault();
    var userInput = $("#color-field").val();
    brushColorBox.css("background", userInput);
  }

  setColorButton.on("click", setColor);

  // Append Canvas to Body
  for (i = 0; i < 20; i++) {
    $("body").append("<div class='square'></div>");
  }
});
