$(document).ready(function() {
  $("button").on("click", function(evt) {
    evt.preventDefault();
    colorSelected = $("input:text").val(); //This is correct.
    console.log("User input is: " + colorSelected);
    $(".brush").css("background-color", colorSelected);
    $("input:text").val("");
  })
});
//Divs are showing up... oddly. ?
$(document).ready(function() {
  for (var i = 0; i < 20; console.log("made div " + i, i++)) {
    $(".controls").after($('<div />', {
      "class": "square",
      click: function(e) {
        e.preventDefault;
        //colorSelected2 = $("input:text").val();
        $(".square").css("background-color", "green");
      },
    }));
  }
});
