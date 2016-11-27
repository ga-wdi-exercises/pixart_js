let $setColor = $(setColor);
let $colorField = $(colorField);
let $brush = $(brush);
let $body = $('body');

// updates the brush div when CLICKED
$setColor.on("click", updateBrush);
// updates the brush div when you press ENTER key
$setColor.keypress("13", updateBrush);

// function find value it text field and updates brush div is the callback
function updateBrush(){
  let color = $colorField.val();
  $brush.css("background-color", color);
  return false;
}

// Adds 20 divs with square class
for(let i=0; i<20; i++){
$body.append("<div class ='square'></div>");
}
