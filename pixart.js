var colorInput = document.getElementById( "color-field" );
var button = document.getElementById( "set-color" );
var brush = document.querySelector( ".brush" );

var setColorClick = function(){
  button.addEventListener("click" , function(evt){
    evt.preventDefault();
    brush.style.backgroundColor = colorInput.value;
  })
}

  setColorClick();
