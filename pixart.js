var box = document.querySelector(".brush");
var form = document.querySelector("#form");
var field = document.querySelector("#color-field");

for(i = 0; i < 3; i++){
	var swatch = document.createElement("div");
	swatch.className = "swatch";
	document.body.firstElementChild.appendChild(swatch);
	swatch.addEventListener("click", function(event){
		box.style.backgroundColor = this.style.backgroundColor;
		field.value = this.style.backgroundColor;
	})
}

var swatches = document.querySelectorAll(".swatch");

form.addEventListener("submit", function(event){
	event.preventDefault();
	box.style.backgroundColor = field.value;
	swatches[2].style.backgroundColor = swatches[1].style.backgroundColor;
	swatches[1].style.backgroundColor = swatches[0].style.backgroundColor;
	swatches[0].style.backgroundColor = field.value;
})

for(i = 0; i < 8000; i++){
  var square = document.createElement("div");
  square.className = "square";
  square.addEventListener("mouseover", function(event){
  	this.style.backgroundColor = field.value;
  })
  document.body.appendChild(square);
}
