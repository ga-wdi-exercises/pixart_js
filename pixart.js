/* commit 1 and 2 */

var body = $("body");
var input = $("#color-field");
var button = $("#set-color");
var brush = $(".brush");

function changeColor() {
  brush.css("background", input.val());
  event.preventDefault();
}

button.on("click", changeColor);

/* commit 3 */

for (i=0; i < 21; i++) {
  body.append("<p class=square></div>");
}

/* commit 4 */

function changeToGreen() {
  $(this).css("background", "green");
  event.preventDefault();
}

$(".square").on("click", changeToGreen);

/* commit 5 */
