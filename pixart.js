// alert("js works!")

var button = $("#set-color");
//var colorInput = $('input:text').val();


// Commit #1
// Event listener on "Set Color" button
//   changes color of the brush box to a color specified in the input field
//   HINT: use evt.preventDefault()
// Using jQuery, select element to add click

function changeBrushColor () {
  button.on("click", function(evt){
    evt.preventDefault()
    $(".brush").css("background", $('input:text').val())
  })
}

changeBrushColor();
// Commit #2:
// See commit one. Event should be on enter key from inside input field

// Commit #3:
// Create 20 divs with class "square"
// Append 20 divs to the body

// Commit #4:
// On click, change color of the individual square to "green"
// **Hint**: either add the event listener while creating the squares, or listen for events on the `body` element

// Commit #5:
// Change so that on click, square changes to the color set using input.

// Commit 6:
// Modify square class css == height 10 px; width 10 px, margin 0
// Modify commit 3 to create 8000 divs
// Change event on box color to mouseover
