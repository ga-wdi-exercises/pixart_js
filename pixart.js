$(document).ready(function() {

  var setColorButton = $("#set-color");
  var brushColorBox = $(".brush");

  setColorButton.on("click", function(evt) {
    evt.preventDefault();
    var userInput = $("#color-field").val();
    brushColorBox.css("background", userInput)
  });

});
