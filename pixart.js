$("#form").submit(setColor);


function setColor() {
  event.preventDefault();
  $userInput = $("#color-field").val();
  var $colorBox = $(".brush").eq(0);
  $($colorBox).css("background-color", $userInput);
}


function makeSquares() {
  for(var i = 0; i < 8000; i++) {
    var $div = $("<div>", {class: "square"});
    $("body").append($div);
  }
  $(".square").mouseover(squareColor);
}
makeSquares();


function squareColor() {
  $(this).css("background-color", $userInput);
}
