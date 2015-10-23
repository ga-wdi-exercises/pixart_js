var inputCounter = 0;

$(document).ready(function() {

  for (var i = 0; i < 8000; i++) {
    $("body").append("<div class='square'></div>");
  }

  $(".square").css({
    "width": "10px",
    "height": "10px",
    "margin": "0"
  });

  $(".controls").append("<div class='brush'></div>");
  $(".controls").append("<div class='brush'></div>");

  $("#set-color").on("click", function() {
    var color = $("#color-field").val();
    $(".brush").eq(inputCounter).css("background", color);
    $(".square").on("mouseover", function() {
      $(this).css("background", color);
    });
    if (inputCounter<2) {
      inputCounter++;
      console.log(inputCounter);
    } else {
      inputCounter = 0;
    }
    event.preventDefault();
  });

  $(".brush").on("click", function(e) {
    var brushColor = $(this).css("background-color");
    inputCounter = e.value;
    console.log(inputCounter);
    event.preventDefault();
    $(".square").on("mouseover", function() {
      $(this).css("background", brushColor);
    });
  });

});
