// Select a DOM element with an id of set-color
var setColor = document.getElementById( "set-color" ); // Selects "Set Color" button

// Use jQuery to select the element, and addEventListener to handle clicks on "Set Color" button
$( setColor ).click(function() {
  event.preventDefault(); // event.preventDefault() prevents the auto page refresh
  var applyColor = $('#color-field').val(); // Get Color Value
  $( ".brush" ).css( "background", applyColor ); // Set Color Value
  console.log("click listener is working")
});
