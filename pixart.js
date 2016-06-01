






$("#set-color").on("click", setColor)



function setColor(){
  event.preventDefault();
  var colorInput = $("#color-field").val();
  $(".brush").css("background-color", colorInput);
}





//
//
// * When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field. (**Hint:** You will need to use `event.preventDefault()` somewhere in your code.)


//
// $( "a" ).click(function( event ) {
//   event.preventDefault();
//   $( "<div>" )
//     .append( "default " + event.type + " prevented" )
//     .appendTo( "#log" );
// });
//
//
// $("#button").click(function(){
//  $("go").css("background-color","yellow");
//  });
