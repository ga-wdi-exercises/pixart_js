

var getColorBtn = $('#set-color');
var brushBox = $('.brush');
var nextColor, startX, startY;
  nextColor = $("#color-field").val();

// click  "Set Color" button => change "brush" box color to input field value
$("#set-color").on('click', function(event){
  event.preventDefault();
  nextColor = $("#color-field").val();
  $('.brush').css('background-color', nextColor);
});

// same as above for enter key press (from inside the input field)
$('#color-field').keydown(function (event){
    if(event.keyCode == 13){
      nextColor = $("#color-field").val();
      $('.brush').css('background-color', nextColor);
      console.log('ENTER pressed');
    }
});

// Create 20 divs of the "square" class and append them to the body (.append())
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

// click on each "square", it changes the color of that individual square to "green"
  $(newDiv).on( "click", function(event) {
    console.log("newDiv was clicked!");
    nextColor = $("#color-field").val();
    // $(event.target).css({ backgroundColor: 'green' });
    $(event.target).css({ backgroundColor: nextColor });
  });
}

$("body").mousemove(function(event) {
  var paintTrail = document.createElement("div");
  var nextColor = $("#color-field").val();
  console.log('nextColor: ' + nextColor);
  // $("body").append(paintTrail);
  // $(paintTrail).width(10);
  // $(paintTrail).height(10);
  // $(paintTrail).css({
  //   position: 'absolute',
  //   backgroundColor: 'blue',
  //   left: event.pageX,
  //   top: event.pageY
  // })

});


// Hint: add event listener while creating squares, or listen for events on the body element

// modify: changes to the color I set using my input instead of "green" every time.

// Modify the CSS so that the "square" class has a height and width of 10px and a margin of 0.
