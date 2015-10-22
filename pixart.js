$(document).ready(function() {

  // Append Canvas to Body
  var appendCanvas = function() {
    // Create Canvas
    for (i = 0; i < 8000; i++) {
      $("body").append("<div class='square'></div>");
    }
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
    $(".swatch").each(function(index){
      $(this).css("background-color", allLiveColors[index]);
    })
  }

  // Set Brush Color Variables
  var setColorButton = $("#set-color");
  var brushColorBox = $(".brush");
  var brushColor = "#1B4370";
  var allLiveColors = ["darkcyan", "rebeccapurple", "palevioletred", "#1B4370"];

  // User Input Set Color
  var setColor = function(evt) {
    evt.preventDefault();
    if (testColor()) {
      brushColor = $("#color-field").val();
      rotatePalette();
    }
  }

  // User Selects Color From Color Swatch Palette
  var setColorFromPalette = function() {
    brushColor = $(this).css("background-color");
    rotatePalette();
  }

  // Rotate Color Swatch Palette
  var rotatePalette = function() {
    allLiveColors.shift()
    allLiveColors.push(brushColor);
    $(".swatch").each(function(index){
      $(this).css("background-color", allLiveColors[index]);
    })
    brushColorBox.css("background-color", allLiveColors[3]);
  }

  //Test Color Function (Validates User Input)
  var testColor = function() {
      var testThis = $("#color-field").val();
      $("#test").css("background-color", testThis);
      if ($("#test").css("background-color") != brushColorBox.css("background-color")) {
        return true;
      } else {
        return false;
      }
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
  $(".square").on("mouseover", function() {
    $(this).css("background-color", brushColor);
  });
});
