$(document).ready(function() {

  $("button").on("click", colorCollector);

  function colorCollector(evt) {
    evt.preventDefault();
    var color = $("input").val();
    $(".brush").css("background", color);
    }

  for (var i = 0; i <= 8000; i++) {
    $("body").append("<div class='square'></div>")
  }

  // $(".square").on("click", changeToGreen)
  //
  // function changeToGreen() {
  //   $(this).css("background", color);
  // }


  $(".square").on("mouseover", changeToCustom);

  function changeToCustom() {
  var color = $("input").val();
  $(this).css("background", color);
  }

})
