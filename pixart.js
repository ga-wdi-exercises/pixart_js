var setColor = $("#set-color");
var colorField = $("#color-field");

function changeColor () {
  event.preventDefault()
  $(".brush").css("background", colorField.val());
};

setColor.on("click", changeColor);
setColor.keypress(changeColor);

for (var i = 0; i < 8000; i++) {
  $("body").append("<div class=square> </div>");
};

$(".square").on("mouseover", toGreen);
function toGreen() {
  $(this).css("background", colorField.val());
};

for (var i = 0; i < 3; i++) {
  $(".bonus").append("<div class=brush></div>");
  $(".bonus").css({"display": "flex", "flex-direction": "row"});
}
