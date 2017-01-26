console.log("Hello World");
$("button").on("click", function(event) {
//  console.log("The button can click!");
  event.preventDefault();
  var value = $("#color-field").val();
  console.log(value);
  $(".brush").css("background", value);
  $("#color-field").val("");
});
