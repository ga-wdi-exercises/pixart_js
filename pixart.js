"use strict";
//define variables
var form = document.getElementById('form');
var input = document.querySelector('#color-field');
var brush = document.querySelector('.brush');
var canvas = document.getElementById('canvas');
//1 & 2
//when you click the "Set Color" button, it should change the color of the "brush"
//box to the color you specify in the input field
//because this is "click", it also works when enter is hit
form.addEventListener("click", function(evt){
  evt.preventDefault();
  brush.style.backgroundColor = input.value
});


//create divs
  for(var i = 0; i < 8000; i++) {
    var newDiv = document.createElement("div");
    newDiv.classList.add("square");
    newDiv.addEventListener('mouseover', function(){
      //the value on the right gets stored into the value in the left
      this.style.backgroundColor = brush.style.backgroundColor;
    })
    canvas.appendChild(newDiv);

  }
