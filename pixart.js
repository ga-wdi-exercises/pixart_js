// When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field. (Hint: You will need to use event.preventDefault() somewhere in your code.)
// Use jQuery to select the element, and addEventListener to handle clicks
// $("body")[0].addEventListener...

var colorinput

$("#set-color").click(function(){
  colorinput = $("#color-field").val()
  event.preventDefault();
  $(".brush").css("background", colorinput);
  $("#0").css("background", ($("#1").css("background")));
  $("#1").css("background", ($("#2").css("background")));
  $("#2").css("background", colorinput);
  console.log("working")
})

// The same thing should happen when I press the enter key from inside the input field

$("#color-field").keydown(function(e){
  if(e.which == 13){
    colorinput = $("#color-field").val()
    event.preventDefault();
    $(".brush").css("background", colorinput);
    $("#0").css("background", ($("#1").css("background")));
    $("#1").css("background", ($("#2").css("background")));
    $("#2").css("background", colorinput);
}})

// Create 20 divs of the "square" class and append them to the body

// Add functionality so that when I click on each "square", it changes the color of that individual square to "green"
// Hint: either add the event listener while creating the squares, or listen for events on the body element

// Modify your code so that when I click on each "square", it changes to the color I set using my input instead of "green" every time.

// Modify the CSS so that the "square" class has a height and width of 10px and a margin of 0.
// Modify your code so that you are creating 8000 divs instead of 20.
// Change the event that changes your box colors from 'click' to 'mouseover'
// Paint a picture!

$(function()
  {for (var i = 1; i <= 8000; i++)
{  $("body").append("<div class = 'square'></div>");
    $(".square").last().mouseover(function(){
      $(this).css("background", colorinput)})}})

// Add a color swatch. You should have 3 boxes with the most recent 3 colors used. When you click on each of those boxes, it should set the current brush color back to that color.

$(function()
  {for (var i=0; i<=2; i++)
{$("form").append("<div id = " + i + " class = 'square''></div>");
$(this).click(function(){
  event.preventDefault();
  $(".brush").css("background", $(this).css("background"));
})}}
)
