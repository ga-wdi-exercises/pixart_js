console.log("Hello World");
$("button").on("click", function(event) {
//  console.log("The button can click!");
  event.preventDefault();
  var value = $("#color-field").val();
  console.log(value);
  $(".brush").css("background", value);
  $("#color-field").val("");
});

function appendSquares() {
  for (var i = 0; i < 20; i++) {
    var div = document.createElement('div');
    div.className = "square";
    $("body").append(div);
    $(".square").on("click", function() {
      var current = $(".brush").css("background");
      $(this).css("background", current);
    })
    console.log("Appended Square");
  }
}

appendSquares();
