$(document).ready(function (){

// // Put a click event handler on the button Set Color
// // Get value from input?
// // Replace background color of brush box with input from form
$("#set-color-button").on("click", function (event) {

  var firstColor = $("#color-field").eq(0).val();

  var colorBox1 = $("div.colorBox").attr("id", "colorBox1").css({"display": "inline-block", "background-color": firstColor});

  var colorBox2 = $("<div id='colorBox2' class='colorBox'><font color='white'>colorBox2</div>").css({"display": "inline-block", "margin-right": "10px"});
  event.preventDefault();

  $("#set-color-button").on("click", function (event) {

  var secondColor = $("#color-field").eq(0).val();

  $(colorBox2).css("background-color", secondColor);

  $(colorBox1).css("background-color", firstColor);

  $(colorBox2).insertBefore($(colorBox1));
  event.preventDefault();

  // $("#set-color-button").on("click", function (event) {
  // var colorBox3 = $("<div id='colorBox3' class='colorBox'><font color='white'>colorBox3</div>").css({"display": "inline-block", "margin-right": "10px"});
  //
  // var thirdColor = $("#color-field").eq(0).val();
  //
  // // $(colorBox1).css("background-color", firstColor);
  // //
  // // $(colorBox2).css("background-color", secondColor);
  //
  // $(colorBox3).css("background-color", thirdColor);
  //
  // $(colorBox3).insertBefore($(colorBox2));
  // event.preventDefault();
  //
  // }) // ends third click function

  }) // ends second click function

}); //ends first click function


function divCreator() {
  for (i = 0; i < 8001; i++) {
    $("body").append("<div class='square'></div>");
  } //ends for loop
}
divCreator();


// grab divs with class of square
// put a click event on each div with a class of square
// when it is clicked, the background color is changed to green;
$(".square").on("mouseover", function() {
  $(this).css("background-color", "green");
}) //ends click event for div of class square




}); //ends document.ready

// Commit 6 should not tell you to modify the CSS square class to width and height of 10px because that was the default.
