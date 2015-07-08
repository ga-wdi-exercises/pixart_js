


var color;

$( "#set-color" )[0].addEventListener( "click", function(event) {
  event.preventDefault();
  color = $(" #color-field" ).val();
  $( ".brush" ).css( "background-color" , color);
})

function appendDiv() {
  for(var i = 0; i < 20; i++) {
    $( "body" ).append( "<div class='square'></div>" );
  }

}

appendDiv();

$ ( "body div.square" ).click(function(){

  $( this ).css( "background-color" , color );
});



// Modify your code so that when I click on each "square", it changes to the color I set using my input instead of "green" every time.
