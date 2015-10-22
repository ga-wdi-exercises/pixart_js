var color;

$("#set-color").click(updateC)
function updateC(evt){
  color =$("#color-field").val();
  evt.preventDefault();
  $("div.brush").css("background", color)
  console.log(color);
}

function divMaker() {
for(i = 0; i < 5000; i++) {
  $("body").append("<div class = 'square'></div>")
  }
}
divMaker();
//put a click event on each individual square
// so that each square turns to green
$(".square").on("mouseover", function () {
  $(this).css("background", color);
});
