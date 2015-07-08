//When user clicks "set color" button, change the color of the "brush" box to the color specified in the input field.
//I think that event.preventDefault is necessary so that the program doesn't set the color on click before reading the rest of the function.
//Replace the background color with the "color field" value.
       //.val() is used to get values from input forms.
//Used console.log to make sure function worked before moving on.
$( "#set-color" ).click(function() {
  event.preventDefault();
  $( ".brush" ).css( "background-color" , $( "#color-field" ).val());
  //console.log("working");
})
//Same as above using enter key (.keypress)
$( "#set-color" ).keypress(function() {
  event.preventDefault();
  $( ".brush" ).css( "background-color" , $( "#color-field" ).val());
})
