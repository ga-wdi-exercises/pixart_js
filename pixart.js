

// Grabs color from input and changes background of square

$( "#set-color" )[0].addEventListener( "click", function(event) {
  event.preventDefault();
  var color = $(" #color-field" ).val();
  $( ".brush" ).css( "background-color" , color);
})

function appendDiv() {
  for(var i = 0; i < 20; i++) {
    $( "body" ).append( "<div class='square'></div>" );
  }

}

appendDiv();

$ ( "body div.square" ).click(function(){

  $( this ).css( "background-color" , "green" );
});
