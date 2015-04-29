for(var i = 0; i < 8000; i++) {
 var square = document.createElement("div");
 square.setAttribute("class", "square");
 document.body.appendChild(square);
}

var draw = document.querySelectorAll(".square");

for (var x = 0; x < draw.length; x++) {
 draw[x].addEventListener("mouseover", function(event){
 event.preventDefault();
 this.style.background = field.value
 })
}
