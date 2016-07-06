var brush = $(".brush");
var button = document.getElementById("set-color");
var input = document.getElementById("color-field");
function changeBrushColor (inputColor) {
  brush.css("background", inputColor);
}


//I got very stuck on the part where I needed to enter the input.value, so I refered to the
//solutions, but I'm not sure what the function(event) part of this does.

button.addEventListener("click", function(event){
  event.preventDefault();
  changeBrushColor(input.value);
})




//the below are my own crazy notes trying to figure out how to get this to work...

//
// $(".four").on( "click", changebackgroundColortoYellow );
//
// function changeBackgroundColorToRed (){
//   body.css("background","red");
// }
//


// brush.addEventListener("click", changeBrushColor)

//
// function changeBoxColor () {
//   $("input:text").val("#brush:background");
// }
