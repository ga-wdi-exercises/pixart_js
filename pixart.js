

var getColorBtn = $('#set-color');
var brushBox = $('.brush');

// click  "Set Color" button => change "brush" box color to input field value
$("#set-color").on('click', function(event){
  event.preventDefault()
  var nextColor = $("#color-field").val();
  $('.brush').css('background-color', nextColor);
});

// same as above for  enter key press (from inside the input field)
$('#color-field').keydown(function (event){
    if(event.keyCode == 13){
        console.log('you pressed enter ^_^');
    }
})

$( "body" ).mousemove(function( event, nextColor ) {
  var msg = "event.pageXY ";
  msg += event.pageX + ", " + event.pageY;
  console.log(msg);
  var paintTrail = document.createElement("div");
  $("body").append(paintTrail);
  $(paintTrail).width(10);
  $(paintTrail).height(10);
  $(paintTrail).css('position', 'absolute');
  $(paintTrail).css('background-color', 'black');
  $(paintTrail).css('border', '1px solid black');
  $(paintTrail).css('left', event.pageX);
  $(paintTrail).css('top', event.pageY);
  console.log($(paintTrail).css('left'));
});

// $('body').mousemove(function (event) {
//   var paintTrail = document.createElement("div");
//   $("body").append(paintTrail);
//   $(paintTrail).width(10);
//   $(paintTrail).height(10);
//   $(paintTrail).css('position', 'absolute');
//   $(paintTrail).css('offset', 100);
//   console.log('position:' + $(paintTrail).css('position'));
//   // console.log('$(paintTrail).width():' + $(paintTrail).width());
//   // console.log('$(paintTrail).css.position:' + $(paintTrail).css.position);
//   // $("body").append(document.createElement("div"));
//   $('div').length;
//   console.log('$(div).length:' + $('div').length);
//   // console.log('$paintTrail: ' + $paintTrail);
//   // $(paintTrail).offset({top:event.pageY,left:event.pageX});
//   // console.log('event.pageXY: ' + event.pageX + ' ' + event.pageY);
// });




// Create 20 divs of the "square" class and append them to the body (.append())
// var divHtml = "<div id='squareTrails'></div>";
// var divString = '';
// for (var i = 0; i < 20; i++) {
//   $('.brush').offset({top:event.pageY,left:event.pageX});
//   console.log('i:' + i);
// }

// $(function() {
//   $("#demo-box").click(function(e) {
//
//     var offset = $(this).offset();
//     var relativeX = (e.pageX - offset.left);
//     var relativeY = (e.pageY - offset.top);
//
//     alert("X: " + relativeX + "  Y: " + relativeY);
//
//   });
// });

// click on each "square", it changes the color of that individual square to "green"
// Hint: add event listener while creating squares, or listen for events on the body element

// modify: changes to the color I set using my input instead of "green" every time.

// Modify the CSS so that the "square" class has a height and width of 10px and a margin of 0.
