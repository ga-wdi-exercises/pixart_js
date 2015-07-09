
// ======= init =======
var nextColor, startX, startY;
var divCount = 0;

$("#set-color").on('click', setBrushColorM);
$("#color-field").keydown('click', setBrushColorK);


// ======= click "Set Color" button => change "brush" box color to input field value
function setBrushColorM(event) {
  event.preventDefault();
  nextColor = $("#color-field").val();
  $('.brush').css('background-color', nextColor);
}


// ======= same as above for enter key press (from inside the input field)
function setBrushColorK(event) {
  if (event.keyCode == 13) {
    event.preventDefault();
    nextColor = $("#color-field").val();
    $('.brush').css('background-color', nextColor);
  }
}


// ======= Create 20 divs of the "square" class and append them to the body (.append())
// startX = 100;
// startY = 100;

// for (var i = 0; i < 20; i++) {
//   startX = startX + 20;
//   startY = startY + 20;
//   var newDiv = document.createElement("div");
//   $(newDiv).addClass("square");
//   $(newDiv).attr("id", 'newDiv' + i);;
//   $(newDiv).width(20);
//   $(newDiv).height(20);
//   $(newDiv).css({
//     position: 'absolute',
//     backgroundColor: 'blue',
//     left: startX,
//     top: startY
//   })
//   $("body").append(newDiv);
//   $(newDiv).on('click', setSquareColor);
// }


// ======= click on each "square", it changes the color of that individual square to "green"
// function setSquareColor(event) {
//     nextColor = $("#color-field").val();
//     if (nextColor) {
//       $(event.target).css({ backgroundColor: nextColor });
//     }
// };


// ======= generate boxes with mousemove for painting
$(".controls").mousemove(paintWithDivs);

function paintWithDivs(event) {
  divCount++;
  var paintTrail = document.createElement("div");
  var nextColor = $("#color-field").val();
  if ((nextColor) && (divCount < 8000)) {
    $(paintTrail).addClass("square");
    $(paintTrail).width(10);
    $(paintTrail).height(10);
    $(paintTrail).css({
      position: 'absolute',
      backgroundColor: nextColor,
      left: event.pageX,
      top: event.pageY
    })
    $("body").append(paintTrail);
  }
}




