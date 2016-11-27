let $setColor = $(setColor);
let $colorField = $(colorField);
let $brush = $(brush);

$setColor.on("click", updateBrush);
$setColor.keypress("13", updateBrush);

function updateBrush(){
  let color = $colorField.val();
  $brush.css("background-color", color);
  return false;
}
