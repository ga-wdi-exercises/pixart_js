// var submitForm = document.getElementById("color-field");
// var form = $("form");
// var box = document.querySelector(".brush");
// var setColor= document.getElementById("set-color");
// // $("#set-color");
// ///
// $("form").click(function(event){
//     event.preventDefault();
// });
//
//
// box.addEventListener("click", handleClickEvent);
//
// function handleClickEvent() {
// // submitForm.innerHTML = submitForm;
//   // box.innerHTML = submitForm;
//   box.style.backgroundColor = form;
// }
// ///
// submitForm.addEventListener("submit", handleSubmitEvent);
//
// function handleSubmitEvent() {
//   box.innerHTML=submitForm;
// }

//set up variables
var form = $("form");
var input = document.querySelector('#color-field');
var brush = document.querySelector('.brush');


$("form").click(function(event){
    event.preventDefault();
  brush.style.backgroundColor = input.value;
});


for (var i = 1; i<=8000; i++) {
  var newDiv = document.createElement("div");
  newDiv.classList.add("square");
  document.querySelector("body").appendChild(newDiv);
  newDiv.addEventListener("mouseover",updateDivColor);
}

function updateDivColor() {
  this.style.backgroundColor= input.value;
}


// for( var i = 0; i < 8000; i++){
//   var div = document.createElement('div');
//   div.classList.add('square');
//   div.addEventListener('mouseover', function(){
//     this.style.backgroundColor = brush.style.backgroundColor;
//   });
//   document.body.appendChild(div);
// }
