//set variables
var setColor = document.getElementById("set-color");
var brush = document.querySelector(".brush");
var colorField = document.getElementById("color-field");
var newColor = document.getElementById("form");
var color = "#E7E5DB";

//add event listener and call on function when clicked
setColor.addEventListener("click", changeBackgroundColor);

//change box color to color typed into colorField
//not exactly sure why and how, but my first commit also works for my 2nd commit. I havent changed anything, but it works to press enter as well.
function changeBackgroundColor(event) {
  brush.style.backgroundColor = colorField.value;
  event.preventDefault();
}

//create 20 divs
for (var i = 0; i < 20; i++){
    var newBrushes = document.createElement("div");
    newBrushes.className = (".brush");
    document.body.appendChild(newBrushes);
}
