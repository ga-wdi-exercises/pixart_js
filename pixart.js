$("#form").submit(setColor);


// Sets the color that user will paint with
// ****************************************
function setColor() {
  event.preventDefault();
  var $userInput = $("#color-field").val();
  var $colorBox = $(".brush").eq(0);
  $($colorBox).css("background-color", $userInput);
}


// Takes color from user and makes the divs bground that color
// ***********************************************************
function squareColor() {
  var $userInput = $("#color-field").val();
  $(this).css("background-color", $userInput);
}


// Creates 8000 divs with the class "square" & listens for click
// *************************************************************
function makeSquares() {
  for(var i = 0; i < 8000; i++) {
    var $div = $("<div>", {class: "square"});
    $("body").append($div);
  }
  $(".square").mouseover(squareColor);
}
makeSquares();
