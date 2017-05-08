var $form = $("#form");
var $button = $("#set-color");
var $brush = $(".brush");
var $input = $("#color-field");

//When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field. (Hint: You will need to use event.preventDefault() somewhere in your code.)

$form.on("submit", function(event){
  event.preventDefault();
  $brush.css('background-color', $input.val());
})
for(var i = 0; i < 8000; i++){
  var $square = $("<div class='square'/>");
  $("body").append($square);
}

$(".square").on("mouseover", function(){
  $(this).css('background', $input.val());
})
