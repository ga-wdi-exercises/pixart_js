//Set Color button
$setColor = $('#set-color');

//Setup color-field to event handler
//function updates color from form
let updateColor = function (){
  newColor = $("#color-field").val();
  $('.brush').css('background', newColor);
  return false;
};
//Loop to create 20 divs with square class
for (i=0; i<21; i++){
  $('body').append($("<div></div>").addClass("square"));
}
//attach set color click to updateColor function
$setColor.on("click", updateColor);
//function changes class square color on click
$('.square').click(function(){
  $(this).toggleClass('clicked');
});
