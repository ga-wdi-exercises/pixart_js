// 1 commit - on click of the set color button change color of brush box to color in the input field
$(document).ready(function(){

  var colorbutton = $("#set-color");
  var newColor;

// prevents form from submitting
  $( "form" ).submit(function( event ) {
  event.preventDefault();
});

// changes the color of brush to new color by calling another function
function colorChanger(){
  $(".brush").css("background", colorSetr);
}
  // gets color from input field
   function colorSetr(){
       return $("#color-field").val();

  }

    colorbutton.on("click",colorChanger);

})
