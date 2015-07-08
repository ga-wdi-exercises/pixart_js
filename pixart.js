

// Global for color
var color;

// EventListener for button
$( "#set-color" )[0].addEventListener( "click", function(event) {
  event.preventDefault();
  color = $(" #color-field" ).val(); // Setting color
  $( ".brush" ).css( "background-color" , color);
  $( "#color-field" ).val(" "); // Gettng rid of that nasty input
})

// Adding Divs
function appendDiv() {
  for(var i = 0; i < 8000; i++) {
    $( "body" ).append( "<div class='square'></div>" );
  }
}

appendDiv();

// Mouseover, background change
$ ( "div.square" ).on( "mouseover" , function() {

  $( this ).css( "background-color" , color );

});
