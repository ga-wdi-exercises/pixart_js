// 1 commit - on click of the set color button change color of brush box to color in the input field
$(document).ready(function(){

  var colorbutton = $("#set-color");
  var pixels = $("<div class="square"></div>")
  // var keyPress = $("color-field");
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

  //  add divs to body
   $("body").append($("pixels"))


    form.on("keyPress",colorChanger);
    // colorbutton.on("click",colorChanger);


})
