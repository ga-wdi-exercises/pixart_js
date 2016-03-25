var setColorButton = document.querySelector("#set-color");
var input = document.querySelector("#color-field");
var brushBox = document.querySelector(".brush");


function setColor() {
  event.preventDefault();
  brushBox.style.backgroundColor = input.value;
}
setColorButton.addEventListener("click", setColor);




// setColorButton.addEventListener("submit", function (event) {
//    event.preventDefault();
//   brushBox.style.backgroundColor = input.value;
// });
