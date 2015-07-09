$("document").ready( function() {



  $("#set-color").on("click", function(event) {
      event.preventDefault();
      $(".brush").css("background-color", $("input").val());
      $("<div class='history'></div>").appendTo($(".controls")).css("background-color", $("input").val());
      if ($(".history").length > 3){
        $(".history").eq(0).remove();
      };
    });


    //console.log($(this).css("background-color"));
    //$(".brush").css("background-color", $(this).css("background-color"))
  //});

  $('#set-color').keypress(function (e) {
    var key = e.which;
    if(key == 13) {
      $(".brush").css("background-color", $("input").val());
    }
  });

  for (var i = 1; i <= 8000; i++) {
      $("<div class='square'></div>").appendTo($("body")).on("mouseover", function () {
        $(this).css("background-color", $("input").val());
      })
    };
  })

// ###Commit 2
// * The same thing should happen when I press the enter key from inside the input field

// ## Bonus
// * Add a color swatch. You should have 3 boxes with the most recent 3 colors used. When you click on each of those boxes, it should set the current brush color back to that color.
