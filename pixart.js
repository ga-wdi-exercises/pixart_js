// alert("js works!")

var button = $("#set-color");
var textField = $('input:text');
var colorSelected = $("#color-field").val();
//Change brush color on click

function changeBrushColorClick() {
  button.on("click", function(evt){
    evt.preventDefault()
    $(".brush").css("background", $("#color-field").val());
//    console.log("Clicking the button works!")
  })
}

changeBrushColorClick();

//Change brush color on enter
function changeBrushColorEnter() {
  textField.keyup(function (evt) {
    if (evt.keyCode === 13) {
        $(".brush").css("background", textField.val());
//        console.log("The enter key works!");
    }
  })
}
changeBrushColorEnter();

// Create 20 divs and append to body
for (var i = 0; i < 8000; i++) {
  $("body").append("<div class='square'></div>");
}

// Event listener for .square
function squareEvents () {
  $(".square").on("click", squareColorUpdate)
}
squareEvents()

// Make the individual DIV change color
function squareColorUpdate(evt) {

  var target = $(evt.target);
  if (target.is(".square")) {
    target.css("background", $("#color-field").val() )
  }
}

// Commit 6:
// Modify square class css == height 10 px; width 10 px, margin 0
// Modify commit 3 to create 8000 divs
// Change event on box color to mouseover


// junk code

//target.children().toggle();
// $("body").on("click", function (evt) {
//   $(".square"[evt]).target("background")
// })
