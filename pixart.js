$(document).ready(function() {
// When I click the "Set Color" button, it should change the color of the "brush" box to the color I specify in the input field. (Hint: You will need to use event.preventDefault() somewhere in your code.)
// Use jQuery to select the element, and addEventListener to handle clicks
// $("body")[0].addEventListener...

  $("#set-color").on("click", function(){
    var color = $("#color-field").val();
    $(".brush").css("background", color);
    event.preventDefault();
  });

  $("input[name='input']").keypress(function(e) {
    if (e.keyCode == 13) {
      var color = $("#color-field").val();
      $(".brush").css("background", color);
      event.preventDefault();
    }
  });
  for (var i = 0; i < 20; i++) {
    $("body").append("<div class='square'></div>");
  }

  var brushColor = "";

  $(".square").on("click", function() {
    brushColor = $(".brush").css("background-color");
    $(this).css("background", brushColor);
  });

});
