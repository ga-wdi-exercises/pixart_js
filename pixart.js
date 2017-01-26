console.log("Hello World");
$("button").on("click", function(event) {
//  console.log("The button can click!");
  event.preventDefault();
  var value = $("#color-field").val();
  console.log(value);
  $(".brush").css("background", value);
  $("#color-field").val("");
});

function appendSquares(num) {
  for (var i = 0; i < num; i++) {
    var div = document.createElement('div');
    div.className = "square";
    $("body").append(div);
    console.log("Appended Square");
  }
}


appendSquares(8000);

$(".square").on("mouseover", function() {
  var current = $(".brush").css("background");
  $(this).css("background", current);
})
