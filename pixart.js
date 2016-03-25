var colorInput = document.querySelector("#color-field");
var brush = document.querySelector(".brush");
var button = document.querySelector("#set-color");

button.addEventListener("click", function(event){
  event.preventDefault();
  brush.style.backgroundColor = colorInput.value //why backgroundColor when the css file sets color by background?
}) //why would this also set up a listener for the enter key

// button.addEventListener("keypress", function(event){
//   event.preventDefault();
//   brush.style.backgroundColor = colorInput.value
// })

for(x=0; x <= 8000; x++) {
  var square = document.createElement('div');
  square.className = 'square';
  document.querySelector('body').appendChild(square);
  square.addEventListener("mouseover", function(){
  this.style.backgroundColor = colorInput.value
  })
  }
