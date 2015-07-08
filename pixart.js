var currentColorChoice = $(".brush").css("background-color");
var userPicksTally = 0;
function userPickedAColor(event) {
  event.preventDefault();
  var userInput = $("input").val();
  $(".brush").css("background-color", userInput);
  currentColorChoice = $(".brush").css("background-color");
  $("input").val("");
  if(userPicksTally > 0 && userPicksTally < 2) {
    $(".controls").append("<div class='brush3'></div>");
    userPicksTally++;
    $(".brush3").css({
      "width": "100px",
      "height": "100px",
      "background": "#1B4370",
      "margin": "15px 15px",
      "display": "inline-block"
    })
    userPicksTally++;
  }
  if(userPicksTally < 1) {
    $(".controls").append("<div class='brush2'></div>");
    userPicksTally++;
    $(".brush2").css({
      "width": "100px",
      "height": "100px",
      "background": "#1B4370",
      "margin": "15px 15px",
      "display": "inline-block"
    })
  }
}
$("#set-color").on("click", userPickedAColor);
$("#color-field").on("submit", userPickedAColor);

for(var i = 0; i < 8000; i++) {
  $("body").append("<div class='square'></div>");
}
$(".square").on("mouseover", function(){
  $(this).css("background-color", currentColorChoice);
})
