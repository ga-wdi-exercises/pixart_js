$(document).ready(function() {

  // Append Canvas to Body
  var appendCanvas = function() {
    // Create Canvas
    for (i = 0; i < 8000; i++) {
      $("body").append("<div class='square'></div>");
    }
    // Add Event Listeners for divs
    $(".square").on("mouseover", function() {
      $(this).css("background", brushColor);
    });
  }

  // Create Color Swatch Palette
  var createSwatch = function() {
    for (i = 0; i < 3; i++) {
      $(".controls").append("<div class='swatch'></div>");
    }
    $(".swatch").css({
      "display": "inline-block",
      "height": "25px",
      "width": "25px",
      "margin": "5px",
    });
    $(".swatch").eq(0).css("background", "darkcyan");
    $(".swatch").eq(1).css("background", "rebeccapurple");
    $(".swatch").eq(2).css("background", "palevioletred");
  }

  // Set Brush Color Variables
  var setColorButton = $("#set-color");
  var brushColorBox = $(".brush");
  var brushColor = "#1B4370";

  // User Input Set Color
  var setColor = function(evt) {
    evt.preventDefault();
    rotatePalette();
    brushColor = $("#color-field").val();
    brushColorBox.css("background", brushColor);
  }

  // User Selects Color From Color Swatch Palette
  var setColorFromPalette = function() {
    brushColor = $(this).css("background");
    rotatePalette();
    brushColorBox.css("background", brushColor);
  }

  // Rotate Color Swatch Palette
  var rotatePalette = function() {
    var swatch2 = $(".swatch").eq(1).css("background-color");
    var swatch3 = $(".swatch").eq(2).css("background-color");
    $(".swatch").eq(0).css("background", swatch2);
    $(".swatch").eq(1).css("background", swatch3);
    $(".swatch").eq(2).css("background", brushColor);
  }

  // Set Square Class Items to New Parameters
  // **I think this is already set in CSS and doesn't change anything
  $(".square").css({
    "height": "10px",
    "width": "10px",
    "margin": 0
  });

  // Build PixArt Components
  appendCanvas();
  createSwatch();

  // Event Listeners
  setColorButton.on("click", setColor);
  $(".swatch").on("click", setColorFromPalette);

});
