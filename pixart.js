
var button = document.querySelector("#set-color");
var brush = document.querySelector(".brush");
var field = document.querySelector("#color-field");
var form = document.querySelector("#form");

  button.addEventListener("click", function(event){
  event.preventDefault();
  brush.style.background = field.value
})


for(var i = 0; i < 20; i++) {
  var square = document.createElement("div");
  square.setAttribute("class", "square");
  document.body.appendChild(square);
}

var draw = document.querySelectorAll(".square");

for (var x = 0; x < 20; x++) {
  draw[x].addEventListener("click", function(event){
  event.preventDefault();
  this.style.background = "green"
  console.log(draw[x]);
  })
}
// <form id="form">
//   <input type="text" id="color-field"></input>
//   <button id="set-color">Set Color</button>
// </form>
