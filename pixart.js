var colorButton = $("#set-color")[0];
var inputBox = $("#color-field")
var colorInput;
//document.getElementById( "set-color");
//console.log(colorButton)
//input a color into the text field
//click the set color button
//somehow save the color entered, and input it into the function???.val()?
function changeSquareColor(){
  event.preventDefault()
  colorInput=$("input").val();
  $( ".brush" ).css( "background-color", colorInput)
}
colorButton.addEventListener("click", changeSquareColor);

for(var i = 1; i < 21; i++) {
 $("body").append('<div class="square" / div>' )
 }
//$("#set-color").on("click", changeSquareColor);
//find the brush box
//var brushBox = $(".brush")[0];
//make brush box change to color entered
