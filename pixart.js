// * When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field. (**Hint:** You will need to use `event.preventDefault()` somewhere in your code.)
// use jQuery to select the element, and `addEventListener` to handle clicks
var color = "#1C4273";

$("button")[0].addEventListener("click", function(event) {
  event.preventDefault();
  color = $("[type]").val();
  $("div.brush").css("background", color);
});

//this is for commit 2, but it was actually already working before writing this code, based on the above. I tried to write it anyway for practice but can't get it to work..
// $("#set-color").keypress( function(event) {
//   if ( event.keyCode == 13 ) {
//      event.preventDefault();
//      color = $("[type]").val();
//      $("div.brush").css("background", color);
//    }
// });

//commit 3
//Create 20 divs of the "square" class and append them to the body - use .append()
for (i = 0; i < 20; i++) {
  $(document.createElement("div")).attr("class", "square").appendTo('body').click( function () {
    $(this).css("background", color);
  });
}

//commit 4
// Add functionality so that when I click on each "square", it changes the color of that individual square to "green"

//commit 5
//Modify your code so that when I click on each "square", it changes to the color I set using my input instead of "green" every time.
