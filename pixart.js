//Set Color button
$setColor = $('#set-color');

//Setup color-field to event handler
//function updates color from form
let updateColor = function (){
  newColor = $("#color-field").val();
  $('.brush').css('background', newColor);
  return false;
};

$setColor.on("click", updateColor);
