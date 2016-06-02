/**
 * Initialize the application.
 */
function initPixelArt() {

  // Constants
  var DEFAULT_COLOR = "#1B4370";

  // Get references to the elements.
  var $colorField = $( '#color-field' );
  var $button     = $( '#set-color' );
  var $brush      = $( '.brush' );
  var $swatchElems = [
    $( '#swatch1' ),
    $( '#swatch2' ),
    $( '#swatch3' )
  ];

  // Remember recently used colors.
  var swatches = [];

  // Some modification to HTML/CSS.
  addTwentySquaresToBody();
  modiefySquareCSS();


  //---
  // Event listeners
  //---


  // Listen for click on the "Set Color" button.
  $button.on( 'click', function( evt ) {
    evt.preventDefault();

    // Process it only if color name is present.
    if ( $colorField.val() ) {
      var colorName = getColorName();
      pushColorToSwatches( colorName );
      setBrushColor( colorName );
    }

    return false;
  });

  // Listen for the enter key pressed from inside the input field.
  $colorField.on( 'keydown', function( evt ) {
    if ( evt.keyCode == 13 ) {     // Enter click.
      $button.trigger( 'click' );  // Simulate mouse click on the button.
      return false;
    }
  });

  // Listen for hover(mouseover) on each "square".
  $( 'body' ).on( 'mouseover', function( evt ) {

    // If class name is 'square'...
    if ( $( evt.target ).attr( 'class' ) === 'square' ) {
      // Change the color of that individual square to the specified color.
      $( evt.target ).css( 'background-color', colorName );
    }
    return false;
  });

  // Listen for click on recently used colors.
  addClickListenerOnSwatches();


  //---
  // Private methods
  //---


  /**
   * Creates 8000 divs of the "square" class and appends them to the body.
   */
  function addTwentySquaresToBody() {
    var index = 0;
    for ( ; index < 8000; index++ ) {
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

  /**
   * Set the colot of "brush" box to the color that is specified in the input field.
   */
  function setBrushColor( color ) {
    $brush.css( 'background-color', color );
    // pushColorToSwatches( color );
    updateSwatches();
    $colorField.val("");
  }

  /**
   * @param  {[String]} color
   */
  function pushColorToSwatches( color ) {

    // If the list is full, remove the oldest color.
    if ( swatches.length === 3 ) {
      swatches.shift();
    }

    // Reject if the color is recently used.
    var index = 0;
    for ( ; index < 3; index++ ) {
      if ( color === swatches[ index ] ) return;
    }

    // Add the specified color to the list.
    swatches.push( color );
  }

  /**
   * Set background colors on color swatches according to recently used colors.
   */
  function updateSwatches() {
    var index = 0;
    for ( ; index < 3; index++ ) {
      $swatchElems[ index ].css( 'background-color', swatches[ index ] );
    }
  }

  /**
   * Utility function to set a click listener on all the swatches.
   */
  function addClickListenerOnSwatches() {
    var index = 0;
    for ( ; index < 3; index++ ) {
      $swatchElems[ index ].on( 'click', function() {
        // Obtain the rgb background-color of the swatch that was clicked.
        var rgb = $( this ).css( 'background-color' );

        // Convert the rgb to an hex color string.
        var hex = rgb2hex( rgb );

        setBrushColor( $brush.css( 'background-color', hex ) );
      });
    }
  }

  /**
   * http://stackoverflow.com/a/3627747/3837223
   * @param  {[String]} rgb  an rgb color string, e.g., rgb(255, 0, 0)
   * @return {[String]}      an hex color string, e.g., #ff0000
   */
  function rgb2hex( rgb ) {
      rgb = rgb.match( /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/ );
      function hex(x) {
          return ( "0" + parseInt(x).toString(16) ).slice(-2);
      }
      return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
 }

} // end initPixelArt


// Start the app code when document is loaded.
$( document ).ready( function(){
  initPixelArt();
});
