$(document).ready(function() {
  $("#set-color").on("mouseover", function(evt) {
    evt.preventDefault();
    var newColor = $("#color-field").val();
    $(".brush").css("background", newColor)
  })

  var divSq = []
  for (var i = 0; i < 8000; i++) {
    divSq.push('<div class="square"></div>');
  }
  $("body").append(divSq);

  $(".square").on("mouseover", function(){
    var newColor = $("#color-field").val();
    $(this).css("background", newColor)
  })
})
