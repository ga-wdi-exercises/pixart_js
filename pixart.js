// Select a DOM element with an id of set-color
var setColor = document.getElementById( "set-color" ); // Selects "Set Color" button
var squareColor = document.getElementsByClassName( "square" ); // Selects ".square"
var brush = document.querySelector( ".brush" ); // Selects ".brush"

// Use jQuery to select the element, and addEventListener to handle clicks on "Set Color" button
$( setColor ).click(function() {
  event.preventDefault(); // event.preventDefault() prevents the auto page refresh
  brush.style.backgroundColor = $( "#color-field" ).val(); // Get Color Value and Set Color Value
  console.log("click listener is working")
});

// Create 20 divs of the "square" class and append them to the body
for( var i = 0; i < 8000; i++){ // Modify your code so that you are creating 8000 divs instead of 20
  $( squareColor ).mouseover(function() { // Add functionality so that when I mouseover each "square"
  this.style.backgroundColor = brush.style.backgroundColor; // Changes the color of individual square to "green"
  });
$("body").append("<div class=square></div>"); // This adds the div as the last child of body with .square
}

// Code for discussion:
// var applyColor = $( "#color-field" ).val(); // Get Color Value
// $( ".brush" ).css( "background", applyColor ); // Set Color Value
// $(this).css( "background", applyColor ); // Changes the color of individual square to "green"
