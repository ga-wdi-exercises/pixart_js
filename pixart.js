$("#form").submit(setColor);


function setColor() {
  event.preventDefault();
  $userInput = $("#color-field").val();
  var $colorBox = $(".brush").eq(0);
  $($colorBox).css("background-color", $userInput);
}


function makeSquares() {
  for(var i = 0; i < 20; i++) {
    var $div = $("<div>", {class: "square"});
    $("body").append($div);
  }
  $(".square").click(squareColor);
}
makeSquares();

function squareColor() {
  $(this).css("background-color", $userInput);
}
