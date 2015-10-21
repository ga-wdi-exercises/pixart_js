$(document).ready(function() {
  $("button").on("click", function(evt) {
    evt.preventDefault();
    colorSelected = $("input:text").val(); //This is correct.
    console.log("the button works...");
    console.log("User input is: " + colorSelected);
    $(".brush").css("background-color", colorSelected);
    $("input:text").val("");
  })
});
//The following is not creating the divs....

$(document).ready(function() {
  for (var i = 1; i < 20; i++) {
    $("div", {
      "class": "square",
      "style": "width = 200px;",
      "style": "height = 200px;",
      click: function(e) {
        e.preventDefault;
        //colorSelected2 = $("input:text").val();
        $(".square").css("background-color", "green");
      },
    });
    var square = $(".square");
    $("body").append(square);
  }
});
