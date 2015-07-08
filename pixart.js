var colorButton = $("#set-color")[0];
var inputBox = $("#color-field");
var colorInput;
var divBoxes = $(".square");
//document.getElementById( "set-color");
//console.log(colorButton)
//input a color into the text field
//click the set color button
//somehow save the color entered, and input it into the function???.val()?
function changeSquareColor(){
  event.preventDefault()
  colorInput=$("input").val();
  $( ".brush" ).css( "background", colorInput)
}
colorButton.addEventListener("click", changeSquareColor);

for(var i = 1; i < 8001; i++) {
 $("body").append('<div class="square" / div>' )
 }

 // divBoxes.addEventListener("click", function(){
 //   event.preventDefault()
 //   $( ".square" ).css( "background-color", "green"  );

 function changeDivColor(){
   //event.preventDefault()
   //colorInput=$("input").val();
   divBoxes.addEventListener("click", changeDivColor);
   $( ".square" ).css( "background", "green")
 }
 // colorButton.addEventListener("click", function(){
 //   event.preventDefault()
 //   $( ".brush" ).css( "background-color", "green" );
//$("#set-color").on("click", changeSquareColor);
//find the brush box
//var brushBox = $(".brush")[0];
//make brush box change to color entered

//when user clicks one of the div squares
  //that square turns green
  //square remains green

//divBoxes.addeventListener("mouseover", changeDivColor);
//$( ".square" ).css( "background", "green")
