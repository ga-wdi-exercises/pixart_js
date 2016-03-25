//From the README:
// FIRST COMMIT:
//* When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field. (**Hint:** You will need to use `event.preventDefault()` somewhere in your code.)
// * Use jQuery to select the element, and `addEventListener` to handle clicks
//   * `$("body")[0].addEventListener...`
//
// -- which means: addEventListener to listen for a click on the button
//                get the input from the text box
//                Change the color of the "brush" box, which is div class = "brush"
//
// var setColor = $( "set-color" )[0]addEventListener("click", )
//
// $( "set-color" )[0].addEventListener("click", val())
// console.log(val);
//
// Okay, forget jQuery for now.

var setColorButton = document.querySelector("#set-color");
var brushBox = document.querySelector(".brush");
var input = document.querySelector("#color-field");

function setColor (){
  event.preventDefault()
  brushBox.style.backgroundColor = input.value;
}
setColorButton.addEventListener("click", setColor);
