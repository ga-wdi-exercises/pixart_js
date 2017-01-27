console.log("Hello World");
var i = 1;
$("#set-color").on("click", function(event) {
//  console.log("The button can click!");
  event.preventDefault();
  var value = $("#color-field").val();
  console.log(value);
  $(".brush").css("background-color", value);
  if (i == 1) {
    $("#recentOne").css("background-color", value);
    i++;
  } else if (i == 2) {
    $("#recentTwo").css("background-color", value);
    i++;
  } else if (i == 3) {
    $("#recentThree").css("background", value);
    i = 1;
  } else {
    i = 1;
    $("#recentOne").css("background", value);
    i++;
  }
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

$(".recent").on("click", function() {
  var saved = $(this).css("background-color");
  console.log(saved);
  $(".brush").css("background", saved);
})
