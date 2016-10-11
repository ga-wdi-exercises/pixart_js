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

/* commit 3 and 6 */

for (i=0; i < 8001; i++) {
  body.append("<p class=square></div>");
}

/* commit 4 and 5 */

function changeToInput() {
  $(this).css("background", input.val());
  event.preventDefault();
}

$(".square").on("mouseover", changeToInput);
