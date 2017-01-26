

var setcolor = $("#set-color")
var input = ""

$("#set-color").on("click", function(){
  event.preventDefault()
  input = document.getElementById("color-field").value;

  $(".brush").css("background", input)
})

//pressing enter works as well

function addSquares(){
  for(var i=0;i<20;i++){
    $("body").append('<div class="square"></div>');
  }
}
addSquares();

$(".square").click(function(){
  $(this).css("background", input)
})
