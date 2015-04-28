var form = document.getElementById("form");
var brush = document.querySelector("div.controls div.brush");
var colorField = document.getElementById("color-field");

form.addEventListener('submit', changeBrush);

function changeBrush(event){
    event.preventDefault();
    brush.style.backgroundColor = colorField.value;
}

for(var i = 0; i < 20; i ++){
    var square = document.createElement("div");
    square.className = "square";
    document.body.appendChild(square);
}
