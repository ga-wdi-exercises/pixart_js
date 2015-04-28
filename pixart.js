var form = document.getElementById("form");
var brush = document.querySelector("div.controls div.brush");
var colorField = document.getElementById("color-field");

form.addEventListener('submit', changeBrush);

function changeBrush(event){
    event.preventDefault();
    brush.style.backgroundColor = colorField.value;
}
function changeSquare(event){
    event.target.style.backgroundColor = colorField.value;
}


for(var i = 0; i < 8000; i ++){
    var square = document.createElement("div");
    square.className = "square";
    square.addEventListener('mouseover', changeSquare);
    document.body.appendChild(square);
}
