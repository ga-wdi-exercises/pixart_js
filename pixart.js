$(document).ready(function() {
  // I decided to add the divs directly to the HTML because the client requested a specific number of brushes
  // I should totaly do this with jQuery instead.
});
var allBrushes = $(".brush");
allBrushes.css("display", "inline-block");
var clickCounter = 0;
$(document).ready(function() {
  $("button").on("click", function(evt) {
    var whichBrush = $(".brush")[clickCounter];
    evt.preventDefault();
    colorSelected = $("input:text").val(); //This is correct.
    console.log("User input is: " + colorSelected);
    $(whichBrush).css("background-color", colorSelected);
    clickCounter = clickCounter + 1;
    if (clickCounter >= 3) {
      clickCounter = 0;
    };
  })
});

$(document).ready(function() {
  var currentButton = $(".button")[0];
  $(".brush").on("click", currentButton = $(".brush")[this])
  function addColor() {
    return function(e) {
      var colorSelected2 = currentButton.style("background-color");
      e.preventDefault;
      $(this).css("background-color", colorSelected2);
    };
  }
  for (var i = 0; i < 8000; i++) {
    $(".controls").after($('<div />', {
      mouseover: addColor(),
      "class": "square",
    }));
  }
});
//Code below is uncessesary as the style.css file already assigns these values
var allSquares = $(".square");
allSquares.css("width", 10 + "px");
allSquares.css("height", 10 + "px");
