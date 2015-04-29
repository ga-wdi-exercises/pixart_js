var form = document.querySelector("#form")
var brush = document.querySelector("div.brush")

var colorChange = document.querySelector("#color-field")
form.addEventListener("submit", changeIt)

function changeIt (event){
	event.preventDefault(); 

	brush.style.backgroundColor = colorChange.value;
}




for(var i = 0; i < 8000; i++) {
	var square = document.createElement('div');
	square.className = "square";
	square.addEventListener("mouseover", function(event){
		this.style.backgroundColor = colorChange.value;
	})
	document.body.appendChild(square);
}

// var squares = document.querySelectorAll(".square");
// for (i = 0; i < squares.length; i++){
// 	squares[i].addEventListener
// }
// 	form.addEventListener("click", function (event))


// }




