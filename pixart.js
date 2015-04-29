var form = document.getElementById("form")
var brush = document.querySelector("div.brush")
var space = document.querySelector("#color-field")
form.addEventListener("submit", function(event){
  event.preventDefault()
  brush.style.backgroundColor = space.value

})



for(i = 0; i < 21; i ++ 1) {
var square = document.createElement("div");
square.className = "square";
square.addEventListener("click", function(event){
  this.style.backgroundColor = "green"
})


document.body.appendChild(square);

}

var

// var squareColor = function(event){
//   event.preventDefault();
//   addEventListener("click",
//     square.style.backgroundColor = "green")
//
// }
