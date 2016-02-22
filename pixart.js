var colorInput = document.getElementById( "color-field" );
var button = document.getElementById( "set-color" );
var brush = document.querySelector( ".brush" );


// The function below seems to meet the requirements for commit 1 and commit 2.
// What is the best way to do this with the enter key?

var setColorClick = function(){
  button.addEventListener("click" , function(evt){
    evt.preventDefault();
    brush.style.backgroundColor = colorInput.value;
  })
}

setColorClick();
