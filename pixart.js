$("document").ready( function() {

$("#set-color").on("click", function(event) {
    event.preventDefault();
    $(".brush").css("background-color", $("input").val());
    //Below adds boxes for color swatch per Bonus. No functionality yet.
    $("<div class='history'></div>").appendTo($(".controls")).css("background-color", $("input").val());
    if ($(".history").length > 3){
      $(".history").eq(0).remove();
    };
  });
//My testing showed that Chrome, Safari, and Firefox all interpret pressing entre on the input as clicking submit, so I felt comfortable omitting the code making that behavior explicit.
  for (var i = 1; i <= 8000; i++) {
      $("<div class='square'></div>").appendTo($("body")).on("mouseover", function () {
        $(this).css("background-color", $("input").val());
      })
    };
  })
