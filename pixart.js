/*
<h1>Pixel Art!</h1>
<div class="controls">
  <form id="form">
    <input type="text" id="color-field"></input>
    <button id="set-color">Set Color</button>
  </form>
  <div class="brush"></div>
</div>
 */

function initPixelArt() {

  // Get references to the elements.
  var $colorField = $( '#color-field' );
  var $button     = $( '#set-color' );
  var $brush      = $( '.brush' );

  // Add click listener on the "Set Color" button.
  $button.on( 'click', function( evt ) {

    // Disable the button's default behavior.
    evt.preventDefault();

    // Set the colot of "brush" box to the color that is specified in the input field.
    $brush.css( 'background', $colorField.val() );
  });

  // Simulate mouse click when the enter key is pressed from inside the input field.
  $colorField.on( 'keyup', function( evt ) {
    if ( evt.keyCode == 13 ) {
      // Simulate clicking on the submit button.
      $button.trigger( 'click' );
    }
  });

  addTwentySquaresToBody();

  /**
   * Creates 20 divs of the "square" class and appends them to the body.
   */
  function addTwentySquaresToBody() {
    var index = 0;
    for (; index < 20; index++ ) {
      var $squareElem = $( "<div>", { class: "square" } );
      $( 'body' ).append( $squareElem );
    }
  }

} // end initPixelArt

$( document ).ready( function(){
  initPixelArt();

});
