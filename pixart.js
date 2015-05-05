var button = document.getElementById("set-color");
var brush = document.getElementsByClassName("brush")[0];
var field = document.getElementById("color-field");
var form = document.querySelector("#form");
var draw = document.getElementsByClassName("square");


button.addEventListener("click", function(event){
        event.preventDefault();
        brush.style.background = field.value
})


for(var a = 0; a < 8000; a++) {
        var square = document.createElement("div");
        square.setAttribute("class", "square");
        document.body.appendChild(square);
}


for (var b = 0; b < draw.length; b++) {
        draw[b].addEventListener("mouseover", function(event){
        event.preventDefault();
        this.style.background = field.value
  })
}
