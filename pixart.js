console.log("script is ready");

var drawColor;

$("button").on("click", getColor);

function getColor(event){
  drawColor = $("#color-field").val();
  event.preventDefault();
  console.log(drawColor);
  $(".brush").css("backgroundColor", drawColor);
  return drawColor;
}

//From the README:
// FIRST COMMIT:
//* When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field. (**Hint:** You will need to use `event.preventDefault()` somewhere in your code.)
// * Use jQuery to select the element, and `addEventListener` to handle clicks
//   * `$("body")[0].addEventListener...`

// ###Commit 2
//
// * The same thing should happen when I press the enter key from inside the input field


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

function addSquares (){
  var i = 0;
  forEach(i < 20, i++)
    document.body.append(".square")
}
