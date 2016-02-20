var setColorButton = document.getElementById("set-color");
var brushBox = document.querySelector(".brush");
var userInput = document.getElementById("color-field");

setColorButton.addEventListener("click", function(evt) {
  brushBox.style.background = userInput.value;
  // Why does the color reset without preventDefault() ??
  evt.preventDefault();
});


for (var i = 0; i < 8000; i++) {
  var newDiv = document.createElement("div");
  document.body.appendChild(newDiv).setAttribute("class", "square");
  newDiv.addEventListener("mouseover", function() {
    this.style.background = userInput.value;
  });
}
