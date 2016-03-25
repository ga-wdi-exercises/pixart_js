var button = document.querySelector("button");
var brushBox = document.querySelector(".brush");
var colorBox = document.querySelector("#color-field");

button.addEventListener( "click", function() {
  event.preventDefault();
  colorBox.setAttribute("value", "");
  brushBox.style.background = colorBox.value;
  paintColor = colorBox.value;
  return paintColor;
} );


for(var i = 0; i < 8000; i++) {
  var newDiv = document.createElement("div");
  document.body.appendChild(newDiv);
  newDiv.className = "square";
  newDiv.addEventListener("mouseover", function() {
    this.style.background = colorBox.value;
  });
}
