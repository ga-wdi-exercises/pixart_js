//1)type color you want (hex code, rgb) in input-field ID = "#color-field", then hit "set-color", then have the box
// "brush" change color to the one you specified

$(document).ready(function(){

   // jQuery methods go here...


//
function pickColor() {
  var color = $("color-field").val()
    event.preventDefault();
  }



  //on click have the box "brush" change to color you specified in pickColor


$("#set-color").on("click", function(){
$(".brush").html("hey")
})
});
