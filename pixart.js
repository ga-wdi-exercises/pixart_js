// * When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field.
// * The same thing should happen when I press the enter key from inside the input field

$(document).ready(function(){

var button = $("#set-color")
var colorField = $("#color-field")
var brush = $(".brush")

function setColor(event){
  event.preventDefault();
  var newColor = colorField.val();
  brush.css({
    "background": newColor
  })
}

button.on("click", setColor);

// * Using JavaScript, create 20 divs of the "square" class and append them to the body
// * Add functionality so that when I click on each "square", it changes the color of that individual square to "green"

for(var pixel = 0; pixel < 21; pixel++){
  var squareDiv = $("<div></div>").addClass("square");
  squareDiv.on("click", function() {
    $(this).css("background-color", "green")
    });
  $("body").append(squareDiv);
}

})

// })
