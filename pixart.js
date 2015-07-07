

// Grabs color from input and changes background of square

$( "#set-color" )[0].addEventListener( "click", function(event) {
  event.preventDefault();
  var color = $(" #color-field").val();
  $( ".brush" ).css("background-color", color);

})
