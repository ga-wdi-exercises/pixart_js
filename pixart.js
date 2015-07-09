// pure jquery

$(document).ready( function() {
  $("#set-color").on("click", function() {
    event.preventDefault();
    $(".brush").css("background-color", $("#color-field").val());
  })
})

// broken jquery + javascript
// $(document).ready( function() {
//   $("#set-color").addEventListener("click", function() {
//     event.preventDefault();
//     $(".brush").css("background-color", $("#color-field").val());
//   })
// })
