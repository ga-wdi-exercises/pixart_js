var button = $("button")
var colorInput
var brush = $(".brush");
var form = $("#color-field");
var square = $(".square");

var squareColor = function() {
  var colorInput = $("#color-field").val();
  $(this).css("background", colorInput);
};

var colorSet= function() {
  var colorInput = $("#color-field").val();
  brush.css("background", colorInput)
};

button.on("click", colorSet);
button.click(function(event) {
  event.preventDefault();
form.submit(colorSet);
});

for (i=0; i<20; i++) {
  $("body").append("<div class='square'></div>");
  var square = $(".square");
};

square.on("click", squareColor);
