//variables needed:
//set color button
var setColorButton = document.getElementById( "set-color" );
//text of form input
var formColorValue = $(":text");
//color form
var colorForm = $("#form");
//brush box
var brushBox = $( ".brush" );
//var enter key on keyboard
//var squarewithID
//
setColorButton.addEventListener("click",function(){
  $(".brush").css( "background-color", formColorValue );
  event.preventDefault();
})
//.text()
//Get the combined text contents of each element in the set of matched elements,
//including their descendants, or set the text contents of the matched elements.
