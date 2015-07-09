$("document").ready( function() {

  function setBrushColor() {
    event.preventDefault();
    $(".brush").css("background-color", $("input").val());
    $("<div class='history'></div>").appendTo($(".controls")).css("background-color", $("input").val());
    if ($(".history").length > 3){
      $(".history").eq(0).remove();
    };
  };

  $("#set-color").on("click", function(event) {
      event.preventDefault();
      setBrushColor();
    });

  $("#set-color").on("keypress", function(e) {
    if(e.which == 13) {
      setBrushColor();
      };
  });

  for (var i = 1; i <= 8000; i++) {
      $("<div class='square'></div>").appendTo($("body")).on("mouseover", function () {
        $(this).css("background-color", $("input").val());
      })
    };
  })

// ## Bonus
// * Add a color swatch. You should have 3 boxes with the most recent 3 colors used. When you click on each of those boxes, it should set the current brush color back to that color.
