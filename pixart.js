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
    for (i = 0; i < 8000; i++) {
      $("body").append("<div class='square'></div>");
    }
    // Add Event Listeners for divs
    $(".square").on("mouseover", function() {
      $(this).css("background", userInput);
    });
  }

  appendCanvas();

  // Set Square Class Items to New Parameters
  // **I think this is already set in CSS
  $(".square").css({
    "height": "10px",
    "width": "10px",
    "margin": 0
  })

});
