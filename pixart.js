// INITIALIZE VARIABLES
var colorInput = document.querySelector( "#color-field" );
var colorButton = document.querySelector( "#set-color" );
var brushBox = document.querySelector( ".brush" );
var squares = document.getElementsByClassName( "square" );


// FUNCTIONS
var changeBrushBox = function( event ) {
  event.preventDefault();
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
  this.style.backgroundColor = "green";
}


// EXECUTE CODE
createSquares( 20 );


// EVENT LISTENERS
colorButton.addEventListener( "click", changeBrushBox );
colorButton.addEventListener( "change", changeBrushBox );

for ( var i=0; i < squares.length; i++ ) {
  squares[i].addEventListener( "click", changeSquareColor );
}
