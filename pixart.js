var inputField = $("#color-field");
var colorButton = $("#set-color");
var brush = $(".brush")

colorButton.on("click", setColor);
colorButton.keypress(setColor);

function setColor() {
  event.preventDefault()
  brush.css("background-color", inputField.val());
};

for (var i = 0; i < 8000; i++) {
  $("body").append("<div class= square></div>" );
}

$(".square").hover(function() {
  $(this).css("background-color", inputField.val());
});

for (var i = 0; i <3; i++) {
  $(".swatches").append("<div class = brush></div>");
}
$(".swatches").css({"display": "flex", "flex-direction": "row"});
