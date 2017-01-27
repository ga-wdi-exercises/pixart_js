
$("button").on("click", function(e) {
  $(".brush").css("background", $("input").val());
  e.preventDefault();
})

$(document).on("keypress", function(e) {
  if (e.which == 13) {
    $(".brush").css("background", $("input").val());
    e.preventDefault();
  }
})

function addDiv() {
  var newDiv;
  for (i=0; i<20; i++) {
    newDiv = $('<div class="square"></div>').val(i)
    $("body").append(newDiv)
  }
}
 addDiv ();

 $(".square").on("click", function(e) {
   $(this).css("background", $("input").val())
 })
