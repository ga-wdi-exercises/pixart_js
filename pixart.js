let $setColor = $(setColor);
let $colorField = $(colorField);
let $brush = $(brush);

$setColor.on("click", updateBrush);

function updateBrush(){
  let color = $colorField.val();
  $brush.css("background-color", color);
  return false;
}
