

var nextColor, startX, startY;
var divCount = 0;

$("#set-color").on('click', setBrushColorM);
$("#color-field").keydown('click', setBrushColorK);

// ======= click "Set Color" button => change "brush" box color to input field value
// $("#set-color").on('click', function(event){
//   event.preventDefault();
//   nextColor = $("#color-field").val();
//   $('.brush').css('background-color', nextColor);
// });

function setBrushColorM(event) {
  console.log('setBrushColorM');
  event.preventDefault();
  nextColor = $("#color-field").val();
  $('.brush').css('background-color', nextColor);
}

// ======= same as above for enter key press (from inside the input field)
// $('#color-field').keydown(function (event){
//     if (event.keyCode == 13) {
//       nextColor = $("#color-field").val();
//       $('.brush').css('background-color', nextColor);
//       console.log('ENTER pressed');
//     }
// });

function setBrushColorK(event) {
  console.log('setBrushColorK');
  if (event.keyCode == 13) {
    event.preventDefault();
    nextColor = $("#color-field").val();
    $('.brush').css('background-color', nextColor);
  }
}


// ======= Create 20 divs of the "square" class and append them to the body (.append())
startX = 100;
startY = 100;

for (var i = 0; i < 20; i++) {
  startX = startX + 20;
  startY = startY + 20;
  var newDiv = document.createElement("div");
  $(newDiv).addClass("square");
  $(newDiv).attr("id", 'newDiv' + i);;
  $(newDiv).width(20);
  $(newDiv).height(20);
  $(newDiv).css({
    position: 'absolute',
    backgroundColor: 'blue',
    left: startX,
    top: startY
  })
  $("body").append(newDiv);
  $(newDiv).on('click', setSquareColor);
}

// ======= click on each "square", it changes the color of that individual square to "green"
  // $(newDiv).on( "click", function(event) {
  //   console.log("newDiv was clicked!");
  //   nextColor = $("#color-field").val();
  //   // $(event.target).css({ backgroundColor: 'green' });
  //   $(event.target).css({ backgroundColor: nextColor });
  // });

function setSquareColor(event) {
    console.log("setSquareColor");
    nextColor = $("#color-field").val();
    // $(event.target).css({ backgroundColor: 'green' });
    if (nextColor) {
      $(event.target).css({ backgroundColor: nextColor });
    }
};

// ======= generate boxes with mousemove for painting

// $(".controls").mousemove(function(event) {
//   console.log('mousemove');
//   var paintTrail = document.createElement("div");
//   var nextColor = $("#color-field").val();
//   if (nextColor) {
//     $(paintTrail).addClass("square");
//     $(paintTrail).width(10);
//     $(paintTrail).height(10);
//     $(paintTrail).css({
//       position: 'absolute',
//       backgroundColor: nextColor,
//       left: event.pageX,
//       top: event.pageY
//     })
//     $("body").append(paintTrail);
//   }
// });

$(".controls").mousemove(paintWithDivs);

function paintWithDivs(event) {
  console.log('paintWithDivs');
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



