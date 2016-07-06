$(document).ready(function() {
  console.log("Your Mom");

$("button").on("click", brushColorChange);

  function brushColorChange() {
    $(".brush").css("background", $("input").val());
    event.preventDefault();
  }
for (i=0; i<20; i++)  {
  $("body").append($("<div class='square'/>"));
}

// $(".square").on("click", colorChange);
//
//   function colorChange(){
//     $(".square").css("background", "green");
//   }

$(".square").on("click", function(event) {
    event.preventDefault();
    $(this).css("background", "green");
});



});
