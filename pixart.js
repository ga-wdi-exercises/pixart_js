var button = document.querySelector("button");
var brushBox = document.querySelector(".brush");
var colorBox = document.querySelector("#color-field");


function changeBoxColor() {
  event.preventDefault();
  colorBox.setAttribute("value", "");
  brushBox.style.background = colorBox.value;

  for(var i = 0; i < 20; i++) {
    newDiv = document.createElement("div");
    document.body.appendChild(newDiv);
    newDiv.className = "square";
  }
}

button.addEventListener( "click", changeBoxColor );
