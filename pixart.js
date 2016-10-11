var button = $("button")
var colorInput
var brush = $(".brush");

var colorSet= function() {
  var colorInput = $("#color-field").val();
  brush.css("background", colorInput)
};

button.on("click", colorSet)
button.click(function(event) {
  event.preventDefault();
});
