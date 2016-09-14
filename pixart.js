$("#set-color").on("click", handleSetColor);

function handleSetColor() {
  var color = $("#color-field").val();
  $(".brush").css("background", color);
}

$("#set-color").on("click", function(e) {
  e.preventDefault();
  console.log(e);
});

// append div 20 times using .append()
for (i=0; i <= 20; i++) {
  $("body").append("<div class='square'></div>");
}

$(".square").on("click", function() {
  console.log($(this));
  var color = $("#color-field").val();
  // $(this).css("background", "green");
  $(this).css("background", color);
});

// function green () {
//   $(".square").css("blackground", "green");
// }
//
//



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
