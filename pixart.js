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

  // Listen for hover(mouseover) on each "square".
  $( 'body' ).on( 'mouseover', function( evt ) {
    if ( $( evt.target ).attr( 'class' ) === 'square' ) {
      // Change the color of that individual square to the specified color.
      $( evt.target ).css( 'background', getColorName() );
    }
  });

  addTwentySquaresToBody();
  modiefySquareCSS();

  /**
   * Creates 8000 divs of the "square" class and appends them to the body.
   */
  function addTwentySquaresToBody() {
    var index = 0;
    for (; index < 8000; index++ ) {
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

  /**
   * Modify the CSS of the "square" class.
   */
  function modiefySquareCSS() {
    // height and width of 10px and a margin of 0.
    $( '.square' ).css( 'width', '10' )
                  .css( 'height', '10' )
                  .css( 'margin', '0' );
  }
} // end initPixelArt


// Start the app code when document is loaded.
$( document ).ready( function(){
  initPixelArt();
});
