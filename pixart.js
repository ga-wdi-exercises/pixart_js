$(document).ready(function() {

  var setColorButton = $("#set-color");
  var brushColorBox = $(".brush");

  var setColor = function(evt) {
    evt.preventDefault();
    var userInput = $("#color-field").val();
    brushColorBox.css("background", userInput);
  }

  setColorButton.on("click", setColor);
});
