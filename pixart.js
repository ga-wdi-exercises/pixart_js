$(document).ready(function() {
  $("#set-color").on("click", function(evt) {
    evt.preventDefault();
    var newColor = $("#color-field").val();
    $(".brush").css("background", newColor)
  })

  var divSq = []
  for (var i = 0; i < 20; i++) {
    divSq.push('<div class="square"></div>');
  }
  $("body").append(divSq);

  $(".square").on("click", function(evt){
    $(this).css("background", "green")
  })
})
