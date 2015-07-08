$("document").ready(function() {

// ###Commit 1
// * When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field. (**Hint:** You will need to use `event.preventDefault()` somewhere in your code.)
// * Use jQuery to select the element, and `addEventListener` to handle clicks
// document.getElementById("set-color").addEventListener("click", function (){
//   event.preventDefault();
//   $(".brush").css("background-color", $("input").val());
// });
function setBrushColor() {
  event.preventDefault();
  $(".brush").css("background-color", $("input").val());
}

function setPixelColor() {
  $(this).css("background-color", $("input").val());
}

$("#set-color").on("click", setBrushColor);
// ###Commit 2
// * The same thing should happen when I press the enter key from inside the input field
//{$("input").on("keyup", setBrushColor);}
//if((event.keyCode || event.which) == 13)

function makeCanvas () {
  for (var i = 1; i <= 8000; i++) {
    $("<div class='square'></div>").appendTo($("body")).on("mouseover", setPixelColor)
  };
}
makeCanvas();

// ## Bonus
//
// * Add a color swatch. You should have 3 boxes with the most recent 3 colors used. When you click on each of those boxes, it should set the current brush color back to that color.
})
