var box = document.querySelector(".brush");
var form = document.querySelector("#form");
var field = document.querySelector("#color-field");

form.addEventListener("submit", function(event){
	event.preventDefault();
	box.style.backgroundColor = field.value;
})

for(i = 0; i < 8000; i++){
  var square = document.createElement("div");
  square.className = "square";
  square.addEventListener("mouseover", function(event){
  	this.style.backgroundColor = field.value;
  })
  document.body.appendChild(square);
}