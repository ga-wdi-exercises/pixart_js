//get content of input field with id colorfield
//set the squares color to match the content of the input field
$( "#submit_button").click(function(event){
  var color;
  color = $('#color-field').val();
  $('#brush').css('background', color);
  event.preventDefault();
});
