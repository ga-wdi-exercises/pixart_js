$("document").ready(function() {

  function setBrushColor() {
    $("#set-color").on("click", function() {
      event.preventDefault();
      $(".brush").css("background-color", $("input").val());
    });
  }

  function makePaintableCanvas () {
    for (var i = 1; i <= 8000; i++) {
      $("<div class='square'></div>").appendTo($("body")).on("mouseover", function () {
        $(this).css("background-color", $("input").val());
      })
    };
  }

  setBrushColor();
  makePaintableCanvas();
})

// ###Commit 2
// * The same thing should happen when I press the enter key from inside the input field

// ## Bonus
// * Add a color swatch. You should have 3 boxes with the most recent 3 colors used. When you click on each of those boxes, it should set the current brush color back to that color.
