var button = document.getElementById("set-color");
var userColor = document.getElementById("color-field");

var brush = document.querySelector("brush");

var setColor = function(){
  button.addEventListener("click", function(event){
    event.preventDefault(); //googled this - not sure exactly what it is doing still.
    document.brush.style.backgroundColor = userColor.value;
    console.log(setColor)
  });
};
============

//great now nothing works. Back to the drawing board... 
