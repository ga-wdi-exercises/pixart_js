var colorInput = document.querySelector( "#color-field" );
var colorButton = document.querySelector( "#set-color" );
var brushBox = document.querySelector( ".brush" );

var changeBrushBox = function( event ) {
  event.preventDefault();
  brushBox.style.backgroundColor = colorInput.value;
}

colorButton.addEventListener( "click", changeBrushBox );
colorButton.addEventListener( "change", changeBrushBox );


var createSquares = function( number ) {
  for( var i=0; i < number; i++ ) {
    square = document.createElement( "div" );
    square.classList.add( "square" );
    document.body.appendChild( square );
  }
}

createSquares( 20 );
