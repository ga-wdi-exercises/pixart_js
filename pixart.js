/*

###Commit 2
* The same thing should happen when I press the enter key from inside the input field
###Commit 3
* Create 20 divs of the "square" class and append them to the body
  * **Hint**: use `.append()`
###Commit 4
* Add functionality so that when I click on each "square", it changes the color of that individual square to "green"
  * **Hint**: either add the event listener while creating the squares, or listen for events on the `body` element
###Commit 5
* Modify your code so that when I click on each "square", it changes to the color I set using my input instead of "green" every time.
###Commit 6
* Modify the CSS so that the "square" class has a height and width of 10px and a margin of 0.
* Modify your code so that you are creating 8000 divs instead of 20.
* Change the event that changes your box colors from 'click' to 'mouseover'
* Paint a picture!
## Bonus
* Add a color swatch. You should have 3 boxes with the most recent 3 colors used. When you click on each of those boxes, it should set the current brush color back to that color.

*/

$(document).ready(function() {
  // when I click setColorBtn:
  $("#set-color").on("click", function(){
    // prevent this event from refreshing the page
    event.preventDefault();
    // check to see if this works
    console.log("it worked");
    //select the box:
      // set css to the val of the input
    $(".brush").eq(0).css("background-color", $("#color-field").eq(0).val());
  });

  $("body").append("<div class='square'></div>");
});
