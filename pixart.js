var form = document.getElementById("form");
var brush = document.querySelector("div#current-brush");
var colorField = document.getElementById("color-field");
var swatch = document.getElementById("swatch")

form.addEventListener('submit', changeBrush);


function changeBrush(event){
    event.preventDefault();
    brush.style.backgroundColor = colorField.value;
    var newSwatch = document.createElement("div");
    newSwatch.className = "brush";
    newSwatch.style.backgroundColor = colorField.value;
    newSwatch.addEventListener('click', selectSwatch);
    swatch.appendChild(newSwatch);
    while(swatch.childNodes.length > 3){
        swatch.removeChild(swatch.firstChild);
    }
}
function changeSquare(event){
    event.target.style.backgroundColor = colorField.value;
}
function selectSwatch(event){
    colorField.value = event.target.style.backgroundColor;
    brush.style.backgroundColor = colorField.value;
}


for(var i = 0; i < 8000; i ++){
    var square = document.createElement("div");
    square.className = "square";
    square.addEventListener('mouseover', changeSquare);
    document.body.appendChild(square);
}
