// var squareDiv =

$("#set-color").on("click", function(){
  event.preventDefault();
  $(".brush").css("backgroundColor", $("#color-field").val());
  console.log("heya")
})

$("#set-color").on("keypress", function(){
  event.preventDefault();
  $(".brush").css("backgroundColor", $("#color-field").val());
  console.log("heya")
})

function makeManySquares () {
  for (var i = 0; i <8000; i++){
    $("body").append("<div class='square'></div>");
  }
}

makeManySquares()
