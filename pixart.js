var colorInput = document.querySelector( "#color-field" );
var colorButton = document.querySelector( "#set-color" );
var brushBox = document.querySelector( ".brush" );

var changeBrushBox = function( event ) {
  event.preventDefault();
  brushBox.style.backgroundColor = colorInput.value;
}

colorButton.addEventListener( "click", changeBrushBox );
