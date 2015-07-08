

var getColorBtn = $('#set-color');
var brushBox = $('.brush');
console.log('getColorBtn: ' + getColorBtn.attr("id"));
console.log('brushBox: ' + brushBox.attr("id"));

// click  "Set Color" button => change "brush" box color to input field value
$("#set-color").click(function(event){
  event.preventDefault()
  console.log('getColorBtn:' + getColorBtn.attr("id"));
  var nextColor = $("#color-field").val();
  console.log('nextColor:' + nextColor);
  $('.brush').css('background-color', nextColor);
  var offset = $(this).offset();
  console.log('this:' + this);
  var relativeX = (event.pageX - offset.left);
  var relativeY = (event.pageY - offset.top);
  console.log('relativeX:' + relativeX);
  console.log('relativeY:' + relativeY);

});

// same as above for  enter key press (from inside the input field)
$('#color-field').keydown(function (e){
    if(e.keyCode == 13){
        console.log('you pressed enter ^_^');
    }
})

// Create 20 divs of the "square" class and append them to the body (.append())
for (var i = 0; i < 20; i++) {

}

$(function() {
  $("#demo-box").click(function(e) {

    var offset = $(this).offset();
    var relativeX = (e.pageX - offset.left);
    var relativeY = (e.pageY - offset.top);

    alert("X: " + relativeX + "  Y: " + relativeY);

  });
});

// click on each "square", it changes the color of that individual square to "green"
// Hint: add event listener while creating squares, or listen for events on the body element

// modify: changes to the color I set using my input instead of "green" every time.

// Modify the CSS so that the "square" class has a height and width of 10px and a margin of 0.
