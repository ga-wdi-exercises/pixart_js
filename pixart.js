$(document).ready( function() {
  $("#set-color").on("click", function() {
    event.preventDefault();
    $(".brush").css("background-color", $("#color-field").val());
  })
  var htmlAppend = "<div class='square'></div>";
  for (var i = 1; i <= 8000; i++) {
      $("body").append(htmlAppend);
    };
  $(".square").mouseover(function (){
    $(this).css("background-color", $("#color-field").val());
  })
})

// added color-field selection at once
