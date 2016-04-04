// // Like the A-Team, but with variables
var setColorButton = $('#set-color');
var inputField= $('#color-field');
var brushElement = $('.brush');
var brushColor = "#1B4370";

setColorButton.click(setBrush);

function setBrush() {
  event.preventDefault();
  brushElement.css("background-color", inputField.val()) ;
}

for (i=0; i < 8000; i++){
  $('body').append("<div class='square'> </div>");
}
$(".square").on("mouseover", setSquareColor);

function setSquareColor () {
  if (brushElement.css("background-color")) {
    brushColor=brushElement.css("background-color");
  }
  $(this).css("background-color", brushColor);
}
