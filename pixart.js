
function setBrushBoxColor(event) {
    var brush = document.getElementsByClassName("brush")[0];
    brush.style.backgroundColor = colorField.value;
    event.preventDefault();
}

function createNewElement(tagName, className) {
    newElement = document.createElement(tagName);
    if (className) newElement.className = className;
    return newElement;
}

function setSquareColor(event, color) {
    event.target.style.backgroundColor = color;
}

var setColorButton = document.getElementById("set-color");
var colorField = document.getElementById("color-field");

setColorButton.addEventListener("click", setBrushBoxColor);
colorField.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) setBrushBoxColor(event);
});


var numSquares = 20, newSquare, i;
for (i = 0; i < numSquares; i++) {
    newSquare = createNewElement("div", "square");
    newSquare.addEventListener("click", function(event) {
        setSquareColor(event, "green");
    });
    document.body.appendChild(newSquare);
}
