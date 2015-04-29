// INITIALIZE
var colorInput = document.querySelector( "#color-field" );
var colorButton = document.querySelector( "#set-color" );
var brushBox = document.querySelector( ".brush" );
var squares = document.getElementsByClassName( "square" );
var swatches = document.getElementsByClassName( "swatch" );


// FUNCTIONS
var createSwatches = function( number ) {
  for ( var i=0; i < number; i++ ) {
    swatch = document.createElement( "div" );
    swatch.classList.add( "swatch" );
    document.body.appendChild( swatch );
  }
}

var changeBrushBox = function( event ) {
  event.preventDefault();
  swatches[2].style.backgroundColor = swatches[1].style.backgroundColor;
  swatches[1].style.backgroundColor = swatches[0].style.backgroundColor;
  swatches[0].style.backgroundColor = brushBox.style.backgroundColor;
  brushBox.style.backgroundColor = colorInput.value;
}

var createSquares = function( number ) {
  for( var i=0; i < number; i++ ) {
    square = document.createElement( "div" );
    square.classList.add( "square" );
    document.body.appendChild( square );
  }
}

var changeSquareColor = function() {
  this.style.backgroundColor = colorInput.value;
}


// EXECUTE CODE
createSwatches( 3 );
createSquares( 8000 );


// EVENT LISTENERS
colorButton.addEventListener( "click", changeBrushBox );
colorButton.addEventListener( "change", changeBrushBox );

for ( var i=0; i < squares.length; i++ ) {
  squares[i].addEventListener( "mouseover", changeSquareColor );
}
