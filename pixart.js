$("#set-color").on("click", handleSetColor);

function handleSetColor() {
  var color = $("#color-field").val();
  $(".brush").css("background", color);
}

$("#set-color").on("click", function(e) {
  e.preventDefault();
  console.log(e);
});




// var nameOfObject = {
// var setColor = $("set-color");
// }

// to prevent default click from happening
// $("#set-color").click(function(handleSetColor) {
//   handleSetColor.preventDefault();
// $("#set-color").on("click", handleSetColor);
//   return false;
// });

// event.preventDefault(); ???


// $("#set-color").click(handleSetColor(click) {
//   event.preventDefault();
// });


// event.preventDefault
// $('#button_id').on('click', function(event) {
//
// event.preventDefault();
//
// var value = $('input_class_or_id').val();
//
// console.log(value); // Dumping value of input field on console panel
//
// });
