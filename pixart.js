var currentColorChoice = $(".brush").css("background-color");
var numberOfUserPicksTally = 0;
$(".brush").css({
  "display": "inline-block",
  "margin": "15px 15px",
  "background-color": "#1B4370"
})
function userPickedAColor(event) {
  event.preventDefault();
  var userInput = $("input").val();
  $(".brush").css("background-color", userInput);
  currentColorChoice = $(".brush").css("background-color");
  $("input").val("");
  if(numberOfUserPicksTally > 0 && numberOfUserPicksTally < 2) {
    $(".controls").append("<div class='brush3'></div>");
    numberOfUserPicksTally++;
    $(".brush3").css({
    "width": "100px",
    "height": "100px",
    "background-color": "#1B4370",
    "margin": "15px 15px",
    "display": "inline-block"
    })
    numberOfUserPicksTally++;
  }
  if(numberOfUserPicksTally < 1) {
    $(".controls").append("<div class='brush2'></div>");
    numberOfUserPicksTally++;
    $(".brush2").css({
      "width": "100px",
      "height": "100px",
      "background-color": "#1B4370",
      "margin": "15px 15px",
      "display": "inline-block"
    })
  }
}
$("#set-color").on("click", userPickedAColor);
$("#color-field").on("submit", userPickedAColor);
$(".brush").on("click", function(event){
  event.preventDefault();
  console.log("user clicked!");
  currentColorChoice = $(".brush").css("background-color");
});
if(numberOfUserPicksTally < 1){
  $(".brush2").on("click", function(event){
    event.preventDefault();
    console.log("user clicked!");
    currentColorChoice = $(".brush2").css("background-color");
  });
}
$(".brush3").on("click", function(event){
  event.preventDefault();
  console.log("user clicked!");
  currentColorChoice = $(".brush3").css("background-color");
});
for(var i = 0; i < 8000; i++) {
  $("body").append("<div class='square'></div>");
}
$(".square").on("mouseover", function(){
  $(this).css("background-color", currentColorChoice);
})
