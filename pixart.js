var box = document.querySelector(".brush");
var form = document.querySelector("#form");
var field = document.querySelector("#color-field");

form.addEventListener("submit", function(event){
	event.preventDefault();
	box.style.backgroundColor = field.value;
})

for(i = 0; i < 20; i++){
  var square = document.createElement("div");
  square.className = "square";
  square.addEventListener("click", function(event){
  	this.style.backgroundColor = "green";
  })
  document.body.appendChild(square);
}