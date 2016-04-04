console.log("script is ready");

var drawColor;

// ###Commit 1:
//* When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field. (**Hint:** You will need to use `event.preventDefault()` somewhere in your code.)
// * Use jQuery to select the element, and `addEventListener` to handle clicks
//   * `$("body")[0].addEventListener...`
// ###Commit 2
//
// * The same thing should happen when I press the enter key from inside the input field
$("button").on("click", getColor);
// Commits 1 and 2:
function getColor(event){
  drawColor = $("#color-field").val();
  event.preventDefault();
  console.log(drawColor);
  $(".brush").css("backgroundColor", drawColor);
  return drawColor;
}

// ###Commit 3
//
// * Create 20 divs of the "square" class and append them to the body
//   * **Hint**: use `.append()`
function addSquares(){
    for (i=0; i<=8000; i++){
      $("body").append("<div class='square'></div>");
    }
};
addSquares();
//
// ###Commit 4
//
// * Add functionality so that when I click on each "square", it changes the
//   color of that individual square to "green"
//   * **Hint**: either add the event listener while creating the squares, or
//     listen for events on the `body` element
//
// $(".square").on("click", changeColor)
// function changeColor(event){
//   $(this).css("backgroundColor", "green");
// }

// ###Commit 5
//
// * Modify your code so that when I click on each "square", it changes to the color I set using my input instead of "green" every time.
//
// $(".square").on("click", changeColor)
// function changeColor(event){
//   $(this).css("backgroundColor", drawColor);
// }

// ###Commit 6
//
// * Modify the CSS so that the "square" class has a height and width of 10px and a margin of 0.
// * Modify your code so that you are creating 8000 divs instead of 20.
// * Change the event that changes your box colors from 'click' to 'mouseover'
// * Paint a picture!

$(".square").on("mouseover", changeColor)
function changeColor(event){
  $(this).css("backgroundColor", drawColor);
}



// ## Bonus
//
// * Add a color swatch. You should have 3 boxes with the most recent 3 colors used. When you click on each of those boxes, it should set the current brush color back to that color.


// Modifying what little code I had from before:

// var setColorButton = $("#set-color");
// var brushBox = $(".brush");
// var input = $("#color-field");
//
// function setColor (){
//   event.preventDefault()
//   brushBox.style.backgroundColor = input.value;
// }
// setColorButton.addEventListener("click", setColor);
// setColorButton.addEventListener("keyDown", setColor);

// function addSquares (){
//   var i = 0;
//   forEach(i < 20, i++)
//     document.body.append(".square")
// }
