$(document).ready(function() {
  // Set Brush Color
  var setColorButton = $("#set-color");
  var brushColorBox = $(".brush");
  var userInput = "#1B4370";
  var setColor = function(evt) {
    evt.preventDefault();
    userInput = $("#color-field").val();
    brushColorBox.css("background", userInput);
  }

  setColorButton.on("click", setColor);

  // Append Canvas to Body
  var appendCanvas = function() {
    // Create Canvas
    for (i = 0; i < 20; i++) {
      $("body").append("<div class='square'></div>");
    }
    // Add Event Listeners for divs
    $(".square").on("click", function() {
      $(this).css("background", "green");
    });
  }

  appendCanvas();
});
