var button = document.querySelector("#set-color");
var color_field = document.querySelector("#color-field");
var brush = document.querySelector(".brush");

button.addEventListener("click", function()
  {
    event.preventDefault();
    brush.style.background = color_field.value;
  });

color_field.addEventListener("keypress", function(e){
  if (13 == e.keyCode) {
   brush.style.background = color_field.value;
  }
});




function createDiv() {
  for (var i = 0; i < 21; i++) {
    var newDiv = document.createElement("div");
    newDiv.className = "square";
    document.body.appendChild(newDiv);
  }
}
createDiv();

var squares = document.querySelector(".square");



squares.addEventListener("click", function() {
  squares.style.background = "green";
});
