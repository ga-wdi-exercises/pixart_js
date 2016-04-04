
$("#set-color").on("click", function(){
  event.preventDefault();
  $(".brush").css("backgroundColor", $("#color-field").val());

  //should be a way of abstracting $("#color-field").val() into a variable, since it repeats three times.
})

$("#set-color").on("keypress", function(){
  event.preventDefault();
  $(".brush").css("backgroundColor", $("#color-field").val());
})

function makeManySquares() {
  for (var i = 0; i <8000; i++){
    $("body").append("<div class='square'></div>");
  }
}

function paintThings() {
  $(".square").on("mouseover", function(){
  $(this).css("backgroundColor", $("#color-field").val())
})
}

makeManySquares()
paintThings()
