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
  //if(numberOfUserPicksTally ===3){
    var moveBrushOneColorToBrushTwo = $(".brush").css("background-color");
    var moveBrushTwoColorToBrushThree = $(".brush2").css("background-color");
    $(".brush2").css("background-color", moveBrushOneColorToBrushTwo);
    $(".brush3").css("background-color", moveBrushTwoColorToBrushThree);
  //}
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
    $(".controls").append("<div class='secondary_instructions'>Click Old Colors To Quickly Switch Back!</div>");
    //$(".controls").append("<button id='reset'>Reset</button>");
    //Alternate to above two lines: display: none to display: block.
    numberOfUserPicksTally++;
    startBrushThree();
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
  startBrushTwo();
}
$("#set-color").on("click", userPickedAColor);
$("#color-field").on("submit", userPickedAColor);
$(".brush").on("click", function(event){
  event.preventDefault();
  console.log("user clicked!");
  currentColorChoice = $(".brush").css("background-color");
});
function startBrushTwo() {
  $(".brush2").on("click", function(event){
    event.preventDefault();
    console.log("user clicked!");
    currentColorChoice = $(this).css("background-color");
  })
}
function startBrushThree() {
  $(".brush3").on("click", function(event){
    event.preventDefault();
    console.log("user clicked!");
    currentColorChoice = $(this).css("background-color");
  });
}

for(var i = 0; i < 8000; i++) {
  $("body").append("<div class='square'></div>");
}
$(".square").on("mouseover", function(){
  $(this).css("background-color", currentColorChoice);
})
