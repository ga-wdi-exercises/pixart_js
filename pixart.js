$(document).ready(function() {
  console.log("Your Mom");

$("button").on("click", brushColorChange);

  function brushColorChange() {
    $(".brush").css("background", $("input").val());
    event.preventDefault();
  }
for (i=0; i<21; i++)  {
  $("body").append($("<div class='square'/>"));
}


});
