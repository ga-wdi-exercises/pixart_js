
const CR = 0x0d; /* Ascii carriage Return Character */

function getAndSetColor() {
  var color = $("#color-field").val();
  $(".brush").css("background",color);
  event.preventDefault();
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

/* commit 3*/
for(var i=0;i<20;i++) {
  $("body").append("<div class='square'></div>")
}
