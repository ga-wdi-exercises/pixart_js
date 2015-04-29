// var form = document.getElementById("form");
// var brush = document.querySelector("div.controls div.brush");
var color = document.getElementById("color-field");

document.getElementById("set-color").addEventListener("click", function(evt){
	evt.preventDefault();
    document.getElementsByClassName("brush")[0].style.backgroundColor = color.value

})

document.getElementById("color-field").addEventListener("keydown", function(evt){
	if (evt.keyCode === 83){
		evt.preventDefault();}
		document.getElementsByClassName("brush")[0].style.backgroundColor = color.value

})

function changeSquare(event){
    event.target.style.backgroundColor = 'green';
    event.target.style.backgroundColor = color.value;
}

for(var i = 0; i < 20; i ++){
    var square = document.createElement("div");
    square.className = "square";
    square.addEventListener('click', changeSquare);
    document.body.appendChild(square);
}

