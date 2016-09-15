
const CR = 0x0d; /* Ascii carriage Return Character */


function getAndSetColor() {
  var color = $("#color-field").val();
  $(".brush").css("background",color);
  lastColor=color;  /* remember last color to set boxes */
  event.preventDefault();
  console.log("in getAndSetColor");
}

/* commit 2*/
function handleKeyboardPress(keyChar) {
  var key = keyChar.which;
  switch (key) {
  case CR: // enter
    console.log('Enter key pressed.');
    getAndSetColor();
    break;
  default:
    break;
  } /* switch */

} /* function handleKeyboardPress */

/*  Main Line code */
if(typeof jQuery === "function"){
  console.log('jQuery loaded!')
}
/* register click events */

/* commit 1 */
var button=$("button");
button.on( "click", getAndSetColor );

/* commit 2 */
var textBox=$('#form');
textBox.on('keydown', '#color-field', handleKeyboardPress);

/* commit 3*/ /* commit 6 */
for(var i=0;i<8000;i++) {
  $("body").append("<div class='square'></div>")
  /* commit 4 */
}
var div=$("div.square")
div.on( "mouseover", setDivColorGrn );

/* commit 4 */
function setDivColorGrn(){
  // console.log("body div click");
  var color = $(".brush").css("background-color"); /* commit 5 */
  // console.log("setting box to ",color," color");
  $(this).css("background-color",color);
}
