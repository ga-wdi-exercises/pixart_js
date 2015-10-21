$(document).ready(function() {
  console.log("Page loaded.");

  // Use jQuery to select the element, and `addEventListener` to handle clicks
  // $("body")[0].addEventListener...`

  // var buttonSetColor = $("#set-color");
  // var divBrush = $("div.brush");
  var formInput = $("#form input");

  function setColor() {
    var color = $("#color-field").val();
    console.log("Set color to", color);
    $("div.brush").css("background", color);
  }

  $("#set-color").on ("click", function (e) {
    e.preventDefault();
    setColor();
  });

});
