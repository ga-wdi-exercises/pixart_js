
const CR = 0x0d; /* Ascii carriage Return Character */

function getAndSetColor() {
  var color = $("#color-field").val();
  $(".brush").css("background",color);
  event.preventDefault();
}

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

var button=$("button");
button.on( "click", getAndSetColor );

var textBox=$('#form');
textBox.on('keydown', '#color-field', handleKeyboardPress);



// $(".brush").css("background","red");
