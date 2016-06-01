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

  // Constants
  var DEFAULT_COLOR = "#1B4370";

  // Get references to the elements.
  var $colorField = $( '#color-field' );
  var $button     = $( '#set-color' );
  var $brush      = $( '.brush' );

  // Listen for click on the "Set Color" button.
  $button.on( 'click', function( evt ) {
    // Disable the button's default behavior.
    evt.preventDefault();

    // Set the colot of "brush" box to the color that is specified in the input field.
    $brush.css( 'background', getColorName() );
  });

  // Simulate mouse click when the enter key is pressed from inside the input field.
  $colorField.on( 'keyup', function( evt ) {
    if ( evt.keyCode == 13 ) {     // Enter click.
      $button.trigger( 'click' );  // Simulate mouse click.
    }
  });

  /**
   * Modify your code so that when I click on each "square", it changes to the color I set using my input instead of "green" every time.
   */
  // Listen for click on each "square".
  $( 'body' ).on( 'click', function( evt ) {
    if ( $( evt.target ).attr( 'class' ) === 'square' ) {
      // Change the color of that individual square to the specified one.
      $( evt.target ).css( 'background', getColorName() );
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

  /**
   * @return {[String]} a color name that is specified in the color input field if any.
   */
  function getColorName() {
    return $colorField.val() ? $colorField.val() : DEFAULT_COLOR;
  }

} // end initPixelArt

$( document ).ready( function(){
  initPixelArt();
});
