var setColor = document.getElementById("set-color");
var colorField = document.getElementById("color-field");

function setBrushBoxColor(event) {
    var brush = document.getElementsByClassName("brush")[0];
    brush.style.backgroundColor = colorField.value;
    event.preventDefault();
}

setColor.addEventListener("click", setBrushBoxColor);

