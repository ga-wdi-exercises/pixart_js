
//on click switch color of .square to another color
//use JQuery to select element and add an event listener

//Commit #1
//Commit #2
//Commit #3
//Commit #4


$("button").on("click", function() {
  var color = $("input").val();
  event.preventDefault();
  $(".brush").css("background-color", color)
  alert("color has changed");
})

$("document").ready(function() {
  for( var i = 0; i < 20; i++) {
    $("body").append("<div class='square'></div>");

    $(".square").on("click", function() {
      $(this).css("background-color", "green")
      // ^^use Orange as "COLOR"
    })
  }
})

// $(".square").on("click", function() {
//   $("this").css("background-color", color)
//   // ^^use Orange as "COLOR"
//
// })
