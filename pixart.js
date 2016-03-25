var button = document.querySelector("#set-color");
var colors = document.querySelector("#color-field");
var brusher = document.querySelector('.brush');

form.addEventListener('submit', function(event){
  event.preventDefault();
  brusher.style.backgroundColor = colors.value;
});



// function colored (input) {
//   console.log (this);
//
// }

// button.addEventListener("click", console.log("I was clicked") );
// colored.addEventListener ("input", console.log ('') );
