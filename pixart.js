// change brush color to input on click
$("#set-color").on("click", function(){
  event.preventDefault();
  var color = ($("#color-field").val());
  $(".brush").css("background", color);
})

//change brush color to input on enter
$("#set-color").keydown(function(e){
  if (e.keycode == 13){
  // event.preventDefault();
  var color = ($("#color-field").val());
  $(".brush").css("background", color);
  }
})

//Create 20 divs of the "square" class and append them to the body
for( var i = 0; i < 8000; i++ ){
$("body").append($("<div class='square'/>"));
}

/*Add functionality so that when I click on each "square", it changes the color of that individual square to the color set Hint**: either add the event listener while creating the squares, or listen for events on the `body` element */
$(".square").on("mouseover", function () {
$(this).css("background", color);
});
