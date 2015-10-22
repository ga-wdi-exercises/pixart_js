$(document).ready(function() {
  // Add a color swatch. You should have 3 boxes with the most recent 3 colors used. When you click on each of those boxes, it should set the current brush color back to that color.
  /*for (var o = 0; o < 2; o++) {
    $("form").after($('<div />'), {
    "class": "brush",
  });
}  I decided to add the divs directly to the HTML because the client requested a specific number of brushes*/
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
      clickCounter =  clickCounter + 1;
      if (clickCounter >= 3) {
        clickCounter = 0;
      };
    })
});
function addColor() {
  return function(e) {
    var colorSelected2 = $("input:text").val();
    e.preventDefault;
    $(this).css("background-color", colorSelected2);
  };
}
$(document).ready(function() {
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
