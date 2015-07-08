$(document).ready (function() {

})
// set brush to color, get from color field, listen for button click, handle body clicks
var newColor;
$("button").on("click", function(event){
  event.preventDefault();
  newColor = $("#color-field").val();
  console.log(newColor);
  $(".brush").css("background-color", newColor);

})

//create 20 divs of square class and add to body
for (var i = 0; i <= 20; i++) {
  $("body").append("<div class='square'></div>")
}

//change square color when clicked. add listener to squares
$(".square").on("click", function(event) {
   $(this).css("background-color", newColor);
});
