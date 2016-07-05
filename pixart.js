// Clicking "Set Color" button, changes the color of the "brush" box to the color defined in the input field.

 var setColorButton = document.querySelector("button");
 var formField = document.querySelector("form");
 var brushBox = document.querySelector(".brush");
 var input = document.querySelector("#color-field")

formField.addEventListener("submit",function(evt){
   evt.preventDefault ();
   brushBox.style.backgroundColor = input.value;
 })
