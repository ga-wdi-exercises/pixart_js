
function setBrushBoxColor(event) {
    brush.style.backgroundColor = colorField.value;
    event.preventDefault();
}

function createNewElement(tagName, className) {
    newElement = document.createElement(tagName);
    if (className) newElement.className = className;
    return newElement;
}

function setSquareColor(event) {
    var brushStyle = window.getComputedStyle(brush);
    var brushColor = brushStyle.getPropertyValue("background-color");
    event.target.style.backgroundColor = brushColor;
}

var setColorButton = document.getElementById("set-color");
var colorField = document.getElementById("color-field");
var brush = document.getElementsByClassName("brush")[0];

setColorButton.addEventListener("click", setBrushBoxColor);
colorField.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) setBrushBoxColor(event);
});


var numSquares = 20, newSquare, i;
for (i = 0; i < numSquares; i++) {
    newSquare = createNewElement("div", "square");
    newSquare.addEventListener("click", function(event) {
        setSquareColor(event);
    });
    document.body.appendChild(newSquare);
}
