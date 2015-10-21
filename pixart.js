$(document).ready(function() {
  $("button").on("click", function(evt) {
    evt.preventDefault();
    colorSelected = $("input:text").val(); //This is correct.
    console.log("User input is: " + colorSelected);
    $(".brush").css("background-color", colorSelected);
    //$("input:text").val("");
  })
});
//Divs are showing up... oddly. ?
$(document).ready(function() {
  for (var i = 0; i < 8000; i++) {
    $(".controls").after($('<div />', {
      mouseover: function(e) {
        var colorSelected2 = $("input:text").val();
        e.preventDefault;
        $(this).css("background-color", colorSelected2);
      },
      "class": "square",
      }));
  }
});
