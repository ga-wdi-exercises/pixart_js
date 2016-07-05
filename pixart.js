$(document).ready(function() {

  $("button").on("click", colorCollector);

  function colorCollector(evt) {
    evt.preventDefault();
    var color = $("input").val();
    $(".brush").css("background", color);
    }


})
