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
  var recentlyUsedColors = [];

  // Some modification to HTML/CSS.
  addTwentySquaresToBody();
  modiefySquareCSS();

  // Listen for click on the "Set Color" button.
  $button.on( 'click', function( evt ) {
    setBrushColor( getColorName() );
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
    if ( $( evt.target ).attr( 'class' ) === 'square' ) {
      // Change the color of that individual square to the specified color.
      $( evt.target ).css( 'background', getColorName() );
    }
    return false;
  });

  // Listen for click on recently used colors.
  addClickListenerToRecentlyUsedColors();

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
    $brush.css( 'background', color );
    pushColorToList( color );
    setRecentlyUsedColors();
    $colorField.val("");
  }

  /**
   * @param  {[String]} color
   */
  function pushColorToList( color ) {

    // If the list is full, remove the oldest color.
    if ( recentlyUsedColors.length === 3 ) {
      recentlyUsedColors.shift();
    }

    // Reject if the color is recently used.
    var index = 0;
    for ( ; index < 3; index++ ) {
      if ( color === recentlyUsedColors[ index ] ) return;
    }

    // Add the specified color to the list.
    recentlyUsedColors.push( color );
  }

  /**
   * Set background colors on color swatches according to recently used colors.
   */
  function setRecentlyUsedColors() {
    var index = 0;
    for ( ; index < 3; index++ ) {
      $swatchElems[ index ].css( 'background', recentlyUsedColors[ index ] );
    }
  }

  /*
  Add a color swatch. You should have 3 boxes with the most recent 3 colors used.
  When you click on each of those boxes, it should set the current brush color back to that color.
   */

  /**
   * TODO
   */
  function addClickListenerToRecentlyUsedColors() {
    var index = 0;
    for ( ; index < 3; index++ ) {
      $swatchElems[ index ].on( 'click', function() {
        // TODO: Set color the brush color.
        var rgb = $( this ).css( 'background-color' );
        var hex = rgb2hex( rgb );
        setBrushColor( $brush.css( 'background-color', hex ) );
      });
    }
  }

  /**
   * http://stackoverflow.com/a/3627747/3837223
   * @param  {[String]} rgb  e.g., rgb(255, 0, 0)
   * @return {[String]}      e.g., #ff0000
   */
  function rgb2hex( rgb ) {
      rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
      function hex(x) {
          return ("0" + parseInt(x).toString(16)).slice(-2);
      }
      return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
 }

} // end initPixelArt


// Start the app code when document is loaded.
$( document ).ready( function(){
  initPixelArt();
});
