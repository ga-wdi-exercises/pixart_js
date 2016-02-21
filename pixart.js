var setColor = document.getElementById("set-color");
var colorField = document.getElementById("color-field");

function setBrushBoxColor(event) {
    var brush = document.getElementsByClassName("brush")[0];
    brush.style.backgroundColor = colorField.value;
    event.preventDefault();
}

setColor.addEventListener("click", setBrushBoxColor);
colorField.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) setBrushBoxColor(event);
});

function appendBody(tagName, className) {
    newElement = document.createElement(tagName);
    if (className) newElement.className = className;
    document.body.appendChild(newElement);
}

for (var i = 0; i < 20; i++) {
    appendBody("div", "square");
}
