var userInput = $("#color-field").val();;

$("#set-color").on("click", function (evt){
  evt.preventDefault();
  var userInput = $("#color-field").val();
  var brushBox = $(".brush").css({
    background: userInput
  });
});
$("#set-color").bind("keypress", function (evt){
  if (evt.keyCode == 13) {
  var userInput = $("#color-field").val();
  var brushBox = $(".brush").css({
    'background': userInput
  });
  };
})
for (var i = 1; i <=8000; i++) {
  var newSquare = document.createElement('div')
  newSquare.setAttribute('class', 'square')
  document.body.appendChild(newSquare);
};
$(".square").css({
  "height": "10px",
  "width": "10px",
  "margin": 0
});
$(".square").on("mouseover", function (evt){
  var userInput = $("#color-field").val();
  $(this).css({
    'background': userInput
});
})
///Attempting Bonus///

var brushBox = $("#color-field").val();
var colorSet = [
  $('#firstSwatch').css('background'),
  $('#secondSwatch').css('background'),
  $('#thirdSwatch').css('background'),
];
var firstSwatch = $("#firstSwatch")
var secondSwatch = $("#secondSwatch")
var thirdSwatch = $("#thirdSwatch")

var setColors = function (){
  $(".brush2").each(function (i) {
    $(this).css("background", colorSet[i]);
  });
};
// setColors();
var changeColors = function (){
  var userInput = $("#color-field").val();; // add
  colorSet.pop();
  var newColor = colorSet.unshift(userInput);
  setColors(); // add
}
$("#set-color").on("click", function (){
  for (i=0; i <= setColors.length; i++) {
    changeColors(i);
  }
});
// changeColors();

var color='blue';
$(".square").on("mouseover", function (evt){
  $(this).css('background', color);
});
$("#firstSwatch").on('click', function() {
  color = $(this).css('background');
});
$("#secondSwatch").on('click', function () {
  color = $(this).css('background');
});
$("#thirdSwatch").on('click', function () {
  color = $(this).css('background');
});
$(".brush").on('click', function (){
  color = $(this).css('background');
});
